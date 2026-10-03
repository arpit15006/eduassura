import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { email, personName, contactNumber, designation, organizationName } = await req.json()

    if (!email || !personName || !organizationName) {
      return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 })
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
      subject: `🎉 New Demo Request from ${personName} - EduAssura`,
      text: `You have a new demo request from: ${personName} (${email})\nOrganization: ${organizationName}\nContact: ${contactNumber || 'N/A'}\nDesignation: ${designation || 'N/A'}`,
      html: `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <div style="background: #C05A3A; padding: 30px 20px; text-align: center;">
      <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Demo Request</h2>
    </div>
    <div style="padding: 40px 30px; color: #4a4a4a; line-height: 1.6;">
      <p style="margin: 0 0 20px; font-size: 16px;">Hello Team,</p>
      <p style="margin: 0 0 20px; font-size: 16px;">You have received a new demo request for EduAssura through the website. Here are the details:</p>
      
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 25px; margin-bottom: 25px;">
        <div style="margin-bottom: 16px;">
          <span style="font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Name</span>
          <span style="font-size: 16px; color: #1e293b; font-weight: 500;">${personName}</span>
        </div>
        <div style="margin-bottom: 16px;">
          <span style="font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Email</span>
          <span style="font-size: 16px; color: #1e293b; font-weight: 500;"><a href="mailto:${email}" style="color: #C05A3A; text-decoration: none;">${email}</a></span>
        </div>
        <div style="margin-bottom: ${contactNumber || designation ? '16px' : '0'};">
          <span style="font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Organization</span>
          <span style="font-size: 16px; color: #1e293b; font-weight: 500;">${organizationName}</span>
        </div>
        ${contactNumber ? `
        <div style="margin-bottom: ${designation ? '16px' : '0'};">
          <span style="font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Contact Number</span>
          <span style="font-size: 16px; color: #1e293b; font-weight: 500;">${contactNumber}</span>
        </div>
        ` : ''}
        ${designation ? `
        <div style="margin-bottom: 0;">
          <span style="font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Designation</span>
          <span style="font-size: 16px; color: #1e293b; font-weight: 500;">${designation}</span>
        </div>
        ` : ''}
      </div>
      
      <p style="margin: 0; font-size: 16px;">Please reach out to them as soon as possible to schedule the demo.</p>
    </div>
    <div style="background: #f8fafc; padding: 20px; text-align: center; color: #94a3b8; font-size: 13px; border-top: 1px solid #e2e8f0;">
      This is an automated message from the EduAssura website.
    </div>
  </div>
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
