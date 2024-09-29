export default async function (req, res) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body;

    const fetch = await import('node-fetch').then(module => module.default); // Dynamic import

    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': '5807cf83-5042-473d-89bd-f5f3e88b7cf9'
      },
      body: JSON.stringify({
        "From": "info@deedcrm.com",
        "To": "sales@solutionminds.in",
        "Subject": "New Contact Form Submission",
        "HtmlBody": `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}`,
        "MessageStream": "outbound"
      })
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
