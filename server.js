import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, POST',
};

app.use(cors(corsOptions));

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;
    const response = await fetch(`https://api.duckduckgo.com/?q=${query}&format=json`);
    const data = await response.json();
    console.log('API Response:', data);
    const results = data.RelatedTopics.map((topic) => ({
      url: topic.FirstURL,
      title: topic.Text,
    }));
    res.json(data.RelatedTopics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});