import { type NextRequest, NextResponse } from "next/server"
import { sendEnquiryEmail } from "@/lib/actions"

export async function POST(request: NextRequest) {
  try {
    const { itemName, itemId } = await request.json()

    const result = await sendEnquiryEmail(itemName, itemId)

    if (result.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
