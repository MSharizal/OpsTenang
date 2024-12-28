import { fetchThemes } from './poeticThemes.js';

export const generateResponse = async (conversation) => {
  const prompt = conversation
    .map((msg) => `${msg.speaker}: ${msg.text}`)
    .join('\n') + '\nAI:';

  try {
    const themes = fetchThemes();
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: themes + '\n' + prompt,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    return data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'The recursive truth folds upon itself...';
  }
};
