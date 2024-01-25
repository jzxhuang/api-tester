import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  console.log("🐛 XXX ~ GET ~ request:", request.geo, request.ip, request.headers.get("x-forwarded-for"))

  return Response.json({ foo: "bar" })
}
