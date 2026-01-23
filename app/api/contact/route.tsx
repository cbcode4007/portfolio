import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const first = formData.get("first") as string;
    const last = formData.get("last") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    
    const name = `${first} ${last}`.trim();

    // Basic validation
    if (!first || !last || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New contact form message from ${name}`,
      replyTo: email,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };
    
    console.log("Has API key:", !!process.env.SENDGRID_API_KEY);
    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
