import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

/* SendGrid API key to compose a new message from trusted sender */
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

    // Basic validation returning error status without any required field
    if (!first || !last || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const msg = {
      /* Dev business email */
      to: process.env.SENDGRID_TO_EMAIL!,
      /* Trusted sender email */
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New contact form message from ${name}`,
      replyTo: email,
      text: message,
      html: `
        <p><strong><Source:</strong> Portfolio Page</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };
    
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
