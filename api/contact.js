export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, size, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont requis' })
  }

  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET || 'production'
  const token = process.env.SANITY_WRITE_TOKEN

  if (!projectId || !token) {
    return res.status(500).json({ error: 'Sanity non configuré' })
  }

  const doc = {
    _type: 'contactSubmission',
    name,
    email,
    phone: phone || '',
    company: company || '',
    size: size || '',
    message,
    createdAt: new Date().toISOString(),
    status: 'new',
  }

  try {
    const response = await fetch(
      `https://${projectId}.api.sanity.io/v2023-08-01/data/mutate/${dataset}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mutations: [{ create: doc }],
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Sanity mutation failed: ' + response.status)
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({ error: 'Erreur lors de l\'envoi' })
  }
}
