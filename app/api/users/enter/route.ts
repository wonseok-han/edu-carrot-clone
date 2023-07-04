import client from "@/libs/server/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { phone, email } = await request.json();
  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  console.log(user);

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
