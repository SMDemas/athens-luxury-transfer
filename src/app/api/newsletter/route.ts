import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log("Attempting to subscribe email:", email); // Θα το δεις στο τερματικό

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], 
        updateEnabled: true
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Brevo Success!");
      return NextResponse.json({ success: true });
    } else {
      console.error("Brevo Error Detail:", JSON.stringify(data)); // Εδώ θα μας πει το πρόβλημα
      return NextResponse.json({ error: data.message || 'Brevo Error' }, { status: 400 });
    }
  } catch (error) {
    console.error("Server Crash:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}