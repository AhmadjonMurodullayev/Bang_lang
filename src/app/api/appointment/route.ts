export async function POST(request: Request) {
  try {
    const { name, phoneNumber, service, date, email, message, type } = await request.json();

    // Majburiy maydonlarni tekshirish
    if (!name || !service || !date) {
      return Response.json({ error: "Missing required fields: name, service, date" }, { status: 400 });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN!;
    const CHAT_ID = process.env.CHAT_ID!;

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
      throw new Error("Telegram API error");
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}


