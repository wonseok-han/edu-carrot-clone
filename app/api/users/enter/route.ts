import client from "@/libs/server/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { phone, email } = await request.json();
  const payload = phone ? { phone: +phone } : { email };

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
  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
        // NOTE: connect: 이미 존재하는 데이터를 참조.
        // NOTE: connectOrCreate: 참조할 데이터가 없을 시 생성하면서 참조.
        // connect: {
        //   id: user.id,
        // },
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymous",
            ...payload,
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

  return NextResponse.json({ email, phone });
}
