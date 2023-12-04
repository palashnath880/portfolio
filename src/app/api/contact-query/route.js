import { NextResponse } from "next/server";
import transporter, { mailOptions } from "../../../../nodemailer/nodemailer";

export async function POST(req) {

    try {

        const { email, subject, name, message } = await req.json();

        // set subject and html content
        mailOptions.subject = subject;
        mailOptions.text = `
            ${name} sent a query.

            Name: ${name}

            Email: ${email}

            Subject: ${subject}

            Message: ${message}

            `;

        const result = await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'SEND SUCCESSFULLY' }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(err, { status: 400 })
    }
}