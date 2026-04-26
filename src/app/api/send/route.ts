import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_3hzkBLWt_9apaQDCfjdibTkiRHPJZePG2');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Ελέγχουμε αν είναι απλό Contact Form ή Booking Request
    const isContactForm = body.message !== undefined;

    if (isContactForm) {
      // Λογική για το Contact Form
      const { fullName, email, subject, message } = body;

      const data = await resend.emails.send({
        from: 'Athens Luxury Transfer <onboarding@resend.dev>',
        to: 'athensluxurytransfer@gmail.com',
        subject: `Contact Inquiry: ${subject} - ${fullName}`,
        replyTo: email,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #7a6f40;">New Message from Contact Form</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        `,
      });
      return NextResponse.json(data);
    } else {
      // Λογική για το Booking (Αυτή που είχες ήδη)
      const { serviceType, pickup, dropoff, fullName, email, phone, date, time, adults, kids, suitcases, bags } = body;

      const data = await resend.emails.send({
        from: 'Athens Luxury Transfer <onboarding@resend.dev>',
        to: 'athensluxurytransfer@gmail.com',
        subject: `New Booking: ${serviceType} - ${fullName}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #7a6f40;">New Booking Request</h2>
            <p><strong>Service:</strong> ${serviceType}</p>
            <p><strong>From:</strong> ${pickup}</p>
            <p><strong>To:</strong> ${dropoff}</p>
            <p><strong>Date/Time:</strong> ${date} at ${time}</p>
            <hr />
            <p><strong>Client:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <hr />
            <p><strong>Passengers:</strong> Adults: ${adults}, Kids: ${kids}</p>
            <p><strong>Luggage:</strong> Suitcases: ${suitcases}, Bags: ${bags}</p>
          </div>
        `,
      });
      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}