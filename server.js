import express from 'express';
import { createTransport } from 'nodemailer';
import pkg from 'body-parser';
const { json } = pkg;

// Use `json` as needed
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

// Nodemailer setup
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'praveenkumar050305@gmail.com', // Replace with your Gmail address
    pass: 'oxvm scxj hmnb tpkt',    // Replace with your Gmail App Password
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Replace with the recipient's Gmail address
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
