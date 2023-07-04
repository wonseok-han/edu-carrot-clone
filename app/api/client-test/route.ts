import { NextRequest, NextResponse } from "next/server";
import client from "@/libs/server/client";

export async function GET() {
  await client.user.create({
    data: { email: "hi", name: "hi" },
  });

  return NextResponse.json({
    ok: true,
  });
}

// export async function POST(req: Request) {
//   const data = {
//     email: "hi",
//     name: "hi",
//   };

//   client.user.create({
//     data: data,
//   });

//   const res = await req.json();
//   return NextResponse.json({ data });
// }
