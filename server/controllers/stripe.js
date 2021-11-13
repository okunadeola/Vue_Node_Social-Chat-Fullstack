// import Stripe from 'stripe'



// const KEY = "sk_test_51JrmbwAVsqeK8xRi5FXzgZmDC2yxZuY6WtCE7M30nWV8ZVSweUDANe5ImcdY6B9kJuhBdr5a1OJoFq6n90ljybd500ed2rl8Ma"
// const stripe = new Stripe(KEY)




// export const payment = async (req, res) => {
//   await stripe.charges.create({
//     source: req.body.tokenId,
//     amount: req.body.amount,
//     currency: "usd",
//   }, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       console.log('error');
//       res.status(500).json(stripeErr)
//     } else {
//       res.status(200).json(stripeRes)
//     }
//   })
// }


























// export const payment = (req, res) => {

//   try {
//     // Create a checkout session with Stripe
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       // For each item use the id to get it's information
//       // Take that information and convert it to Stripe's format
//       line_items: req.body.items.map(({ id, quantity }) => {
//         const storeItem = storeItems.get(id)
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: quantity,
//         }
//       }),
//       mode: "payment",
//       // Set a success and cancel URL we will send customers to
//       // These must be full URLs
//       // In the next section we will setup CLIENT_URL
//       // success_url: `${process.env.CLIENT_URL}/success.html`,
//       // cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
//     })

//     res.json({ success: "success" })
//   } catch (e) {
//     // If there is an error send it to the client
//     res.status(500).json({ error: e.message })
//   }
// }


// export const payment = async (req, res) => {
//   await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price: req.body.amount,
//         quantity: 1,
//       },
//     ],
//     payment_method_types: [
//       'card',
//     ],
//     mode: 'payment',
//   }, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).json(stripeErr)
//     } else {
//       res.status(200).json(stripeRes)
//     }
//   })

// }