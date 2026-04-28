import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 1. Βασικός έλεγχος αν το email είναι έγκυρο
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Παρακαλώ εισάγετε ένα έγκυρο email.' },
        { status: 400 }
      );
    }
    
    // 2. Παίρνουμε το κλειδί από το περιβάλλον (Environment Variable)
    const apiKey = process.env.SENDINBLUE_API_KEY;

    if (!apiKey) {
      console.error("Missing SENDINBLUE_API_KEY in Vercel settings");
      return NextResponse.json(
        { error: 'Internal Configuration Error' },
        { status: 500 }
      );
    }

    // 3. Κλήση στο API της Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Η λίστα σου στο Brevo
        updateEnabled: true
      })
    });

    const data = await response.json();

    // 4. Έλεγχος απάντησης
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      // Αν το email υπάρχει ήδη, η Brevo επιστρέφει σφάλμα - το διαχειριζόμαστε
      console.error("Brevo API Error:", data.message);
      return NextResponse.json(
        { error: data.message || 'Υπήρξε ένα πρόβλημα με την εγγραφή.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Newsletter Route Crash:", error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}