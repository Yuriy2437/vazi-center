import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, question } = req.body;

    if (!name || !question) {
      return res.status(400).json({ error: 'Name and question are required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('your_database_name');

      const result = await db.collection('questions').insertOne({
        name,
        question,
        createdAt: new Date(),
      });

      res
        .status(201)
        .json({
          message: 'Question submitted successfully',
          id: result.insertedId,
        });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Unable to submit question' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
