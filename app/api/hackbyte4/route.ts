import axios from "axios"

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body.body)

  const res = await axios.post(process.env.EXCEL_DOC_LINK as string, body.body)
  console.log(res.data)

  const result = await res.data
  return new Response(JSON.stringify(result), { status: res.status })
}
