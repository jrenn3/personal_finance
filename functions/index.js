const {onValueCreated} = require("firebase-functions/v2/database");
const nodemailer = require("nodemailer");

const myEmail = "jr.auto.generated.emails@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: myEmail,
    pass: "ayfl whbs chyg zxaa",
  },
});

exports.sendEmailOnDatabaseWrite = onValueCreated("/downloads/{pushId}", async (event) => {
  const data = event.data.val(); // Access new database entry
  const mailOptions = {
    from: myEmail,
    to: "jmren3@gmail.com, marissamhemmings@gmail.com",
    subject: `New Excel By Moe downloaded by ${data.name}`,
    text: `
            Name: ${data.name}
            Email: ${data.email}
            Source: ${data.source}
            Model: ${data.modelName}
            Timestamp: ${data.timestamp}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});

exports.sendEmailOnDatabaseWrite = onValueCreated("/downloads/{pushId}", async (event) => {
  const data = event.data.val(); // Access new database entry
  const mailOptions = {
    from: myEmail,
    to: data.email,
    subject: `Enjoy your new template!`,
    text: `
            Thank you ${data.name} for your ${data.modelName} download.
            
            If you have any questions or feedback, please don't hesitate to reach out to us at excelbymoe@gmail.com.
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});
