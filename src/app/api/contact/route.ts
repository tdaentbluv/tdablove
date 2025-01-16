import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Format the email content
    const emailContent = `
      New Contact Form Submission
      
      Contact Information:
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data.companyName}
      Job Title: ${data.jobTitle}
      
      Request Details:
      Reason for Contact: ${data.contactReason}
      Timeframe: ${data.timeframe}
      
      Message:
      ${data.message}
      
      Submission Time: ${data.submissionTime}
      User Agent: ${data.userAgent}
    `;

    // Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'tdaentrprz@gmail.com',
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      text: emailContent,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
