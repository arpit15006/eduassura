import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Configure the transporter with environment variables
    // For this to work, you need to add these to your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // The email you want to receive notifications at
    const myEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER

    if (!myEmail || !process.env.SMTP_PASS) {
      console.warn('⚠️ SMTP credentials not configured. Form submission received but email not sent:', email)
      // In development, we'll still return success so the UI works, 
      // but warn the developer that emails aren't actually sending.
      return NextResponse.json({ success: true, warning: 'SMTP not configured' })
    }

    const mailOptions = {
      from: `"EduAssura Website" <${process.env.SMTP_USER}>`,
      to: myEmail,
      subject: '🎉 New Demo Request - EduAssura',
      text: `You have a new demo request from: ${email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #C05A3A;">New Demo Request</h2>
          <p>Someone has requested a demo of EduAssura through the website CTA.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Email:</strong> ${email}
          </div>
          <p>Please reach out to them as soon as possible.</p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
