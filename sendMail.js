import nodemailer from "nodemailer";


export const sendEmailNotification = (title, slug)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });



    
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TO_EMAIL,
        subject: `New post on Hashnode`,
        text: `New post on Hashnode\n\nTitle: ${title}\nSlug: ${slug}`,
        html: `<h1>New post on Hashnode</h1><br><h3>Title: ${title}</h3><br><h3>Slug: ${slug}</h3>`,
    };
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
        }
        console.log("Email sent: " + info.response);

    });
}

