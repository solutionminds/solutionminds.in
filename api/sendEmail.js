import { config } from './config/config.js'; // Adjust the path as necessary

export default async function (req, res) {
    if (req.method === 'POST') {
        const { name, email, phone } = req.body;

        try {
            // Dynamically import node-fetch
            const fetch = (await import('node-fetch')).default;

            const response = await fetch('https://api.postmarkapp.com/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Postmark-Server-Token': config.postmarkApiKey // Use the config here
                },
                body: JSON.stringify({
                    "From": config.senderEmail, // Use the config here
                    "To": config.recipientEmail, // Use the config here
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
        } catch (error) {
            console.error('Error while sending email:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
