import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Ma'lumotlarni tekshirish
    const { fullName, email, service, date, message, type, timestamp, locale } = body;
    
    if (!fullName || !email || !service || !date) {
      return NextResponse.json(
        { message: 'Barcha majburiy maydonlar to\'ldirilishi kerak' },
        { status: 400 }
      );
    }

    // Email formatini tekshirish
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Noto\'g\'ri email formati' },
        { status: 400 }
      );
    }

    // Sana formatini tekshirish
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return NextResponse.json(
        { message: 'Sana bugungi kundan keyin bo\'lishi kerak' },
        { status: 400 }
      );
    }

    // Ma'lumotlarni log qilish (kelajakda database-ga saqlash uchun)
    console.log('Yangi appointment:', {
      fullName,
      email,
      service,
      date,
      message,
      type,
      timestamp,
      locale,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent')
    });

    // Kelajakda bu yerda database-ga saqlash, email yuborish va boshqa operatsiyalar bo'ladi
    // Hozircha faqat muvaffaqiyatli javob qaytaramiz

    return NextResponse.json(
      { 
        message: 'Appointment muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.',
        appointmentId: `APT-${Date.now()}`,
        status: 'pending'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Appointment API error:', error);
    return NextResponse.json(
      { message: 'Server xatosi. Iltimos, keyinroq urinib ko\'ring.' },
      { status: 500 }
    );
  }
}

// OPTIONS method for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
