import { NextApiRequest, NextApiResponse } from 'next';
import { Config } from '@/config';

export default async function openAiHandler(req: NextApiRequest, res: NextApiResponse) {
  const {messages} = req.body;
  const apiKey = process.env.OPENAI_API_KEY as string;
  const url = 'https://api.openai.com/v1/chat/completions';
  const body = JSON.stringify({
    messages,
    model: Config.model,
    stream: false
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body
    });
    const data = await response.json();
    res.status(200).json({data});
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({error: errorMessage});
  }
}
