
//import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

 const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  
  const fromEmail = process.env.FROM_EMAIL;
  try {
    const { data }  = await resend.emails.send({
      from: fromEmail,
      to: ["shravni846chendwankar@gmail.com"],
      subject: "Hello world",
      text: "This is the plain text email body.",
    });

    return Response.json({data});
  } catch (error) {
    return Response.json({ error });
  }
}

