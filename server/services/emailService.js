const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendInvoiceEmail = async (email, subscriptionId, plan, amount) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Subscription Invoice',
    text: `Thank you for subscribing to the ${plan} plan. Your subscription ID is ${subscriptionId}. The amount charged is ₹${amount / 100}.`
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendInvoiceEmail };
