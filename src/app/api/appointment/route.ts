export async function POST(request: Request) {
  try {
    // Request body-ni parse qilish
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return Response.json({ 
        error: "Invalid JSON format" 
      }, { status: 400 });
    }

    const { name, phoneNumber, service, date, email, message, type } = body;

    // Debug logging
    console.log('Received request:', {
      name: !!name,
      phoneNumber: !!phoneNumber,
      service: !!service,
      date: !!date,
      email: !!email,
      message: !!message,
      type: type
    });

    // Majburiy maydonlarni tekshirish
    if (!name || !service || !date) {
      return Response.json({ 
        error: "Missing required fields: name, service, date" 
      }, { status: 400 });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    // Environment variables tekshirish
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing environment variables:', { BOT_TOKEN: !!BOT_TOKEN, CHAT_ID: !!CHAT_ID });
      return Response.json({ 
        error: "Server configuration error. Please contact administrator." 
      }, { status: 500 });
    }

    // Form turiga qarab xabar tuzish
    let messageText = '';
    
    if (type === 'service_appointment') {
      messageText = `
📩 *Yangi Service Appointment*
👤 Ism: ${name}
📧 Email: ${email || 'Kiritilmagan'}
🛠 Xizmat: ${service}
📅 Sana: ${date}
💬 Xabar: ${message || 'Kiritilmagan'}
      `;
    } else {
      messageText = `
📩 *Yangi Contact So'rovi*
👤 Ism: ${name}
📞 Telefon: ${phoneNumber || 'Kiritilmagan'}
📧 Email: ${email || 'Kiritilmagan'}
🛠 Xizmat: ${service}
📅 Sana: ${date}
💬 Xabar: ${message || 'Kiritilmagan'}
      `;
    }

    const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const res = await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageText,
        parse_mode: "Markdown"
      })
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error('Telegram API error:', {
        status: res.status,
        statusText: res.statusText,
        error: errorData
      });
      throw new Error(`Telegram API error: ${res.status} ${res.statusText}`);
    }

    const telegramResponse = await res.json();
    console.log('Telegram API success:', telegramResponse);

    return Response.json({ success: true });

  } catch (err) {
    console.error('API Error:', err);
    
    // Error type-ni aniqlash
    let errorMessage = "Server error";
    let statusCode = 500;
    
    if (err instanceof Error) {
      if (err.message.includes('Telegram API error')) {
        errorMessage = "Telegram service temporarily unavailable";
        statusCode = 503;
      } else if (err.message.includes('JSON')) {
        errorMessage = "Invalid request data";
        statusCode = 400;
      }
    }
    
    return Response.json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? (err instanceof Error ? err.message : String(err)) : undefined
    }, { status: statusCode });
  }
}


