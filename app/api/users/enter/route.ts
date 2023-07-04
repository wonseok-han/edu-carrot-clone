import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res.email);
  return new Response("ok", { status: 200 });
}
