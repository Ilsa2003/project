const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { sendInvoiceEmail } = require('../services/emailService');
const User = require('../model/userModel');

router.post('/create-subscription', async (req, res) => {
  const { plan, userId, coupon, discount } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const pricing = {
      free: { amount: 0, applications: 1 },
      bronze: { amount: 10000, applications: 3 },
      silver: { amount: 30000, applications: 5 },
      gold: { amount: 100000, applications: 'unlimited' }
    };

    const planDetails = pricing[plan];
    if (!planDetails) {
      return res.status(400).send('Invalid plan selected');
    }

    const finalAmount = planDetails.amount - (planDetails.amount * discount / 100);

    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: 'plan_ID' }],
      coupon: coupon || undefined,
      trial_from_plan: true,
    });

    await sendInvoiceEmail(user.email, subscription.id, plan, finalAmount);

    res.send({ clientSecret: subscription.latest_invoice.payment_intent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
