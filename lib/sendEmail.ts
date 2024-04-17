"use server"

import { validateString } from "@/lib/utils"
import { Resend } from "resend"
import KoalaWelcomeEmailProps from "@/app/components/email-template"
import emailuserinfoTemplate from "@/app/components/emailuserinfoTemplate"


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message')
    const senderEmail = formData.get('senderEmail')
    const name = formData.get('name')
   

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    if (!validateString(senderEmail, 5000)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(name, 5000)) {
        return {
            error: "Invalid sender name"
        }
    }

    console.log(formData)
   

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'tantichandan@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string
        });

        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: "Failed to send email" };
    }

   
}