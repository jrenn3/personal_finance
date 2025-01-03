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
    subject: `New FUNds download by ${data.name}`,
    text: `
            Name: ${data.name}
            Email: ${data.email}
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
