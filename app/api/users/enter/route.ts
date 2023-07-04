import client from "@/libs/server/client";
import smtpTransport from "@/libs/server/email";
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  const response = NextResponse<ResponseType>;
  const { phone, email } = await request.json();
  const user = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  // NOTE: upsert: 조건에 맞는 데이터가 있을 시 update, 없으면 생성
  //   const user = await client.user.upsert({
  //     where: {
  //       ...payload,
  //     },
  //     create: {
  //       name: "Anonymous",
  //       ...payload,
  //     },
  //     update: {},
  //   });

  if (!user) return response.json({ ok: false }, { status: 400 });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        // NOTE: connect: 이미 존재하는 데이터를 참조.
        // NOTE: connectOrCreate: 참조할 데이터가 없을 시 생성하면서 참조.
        // connect: {
        //   id: user.id,
        // },
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  console.log(user);
  console.log(token);

  //   if (email) {
  //     user = await client.user.findUnique({
  //       where: {
  //         email,
  //       },
  //     });

  //     if (user) console.log("found it!");

  //     if (!user) {
  //       console.log("Did not notFound, Will create");
  //       user = await client.user.create({
  //         data: {
  //           name: "Anonymous",
  //           email,
  //         },
  //       });
  //     }

  //     console.log(user);
  //   }

  //   if (phone) {
  //     user = await client.user.findUnique({
  //       where: {
  //         phone: +phone,
  //       },
  //     });

  //     if (user) console.log("found it!");

  //     if (!user) {
  //       console.log("Did not notFound, Will create");
  //       user = await client.user.create({
  //         data: {
  //           name: "Anonymous",
  //           phone: +phone,
  //         },
  //       });
  //     }

  //     console.log(user);
  //   }

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.MESSAGING_SERVICE_SID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}.`,
    });

    console.log(message);
  } else if (email) {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Nomad Carrot Authentication Email",
      text: `Authentication Code : ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    };
    const result = await smtpTransport.sendMail(
      mailOptions,
      (error, responses) => {
        if (error) {
          console.log(error);
          return null;
        } else {
          console.log(responses);
          return null;
        }
      }
    );
    smtpTransport.close();
    console.log(result);
  }

  return response.json({ ok: true });
}
