# Casper the Friendly Bot

This is a simple OpenAI chat assistant made with Next.js.

## Instructions

- The usual: Clone the repo, then run `npm install`.
- And also:
  - Create an .env.local file (or environment variable on the server) with the following content:\
  `OPENAI_API_KEY=sk-XXXX`
  - Set the following in `config.ts`:
    - The OpenAI model: GPT-3 or GPT-4  
    - The persona, which sets the initial System or Assistant messages
- Developing and debugging: `npm run dev`

## OpenAI models
Two models are provided in the config; add your own if you have access to them:
- gpt-3.5-turbo
- gpt-4

## Personas
Three personas are defined in `personas.ts`, providing the initial system and assistant messages:
- Casper: The default persona depicting a friendly chatbot.
- Engineer: A structural engineer and fullstack web developer.
- Kent: The custom ChatGPT prompt used by a great JavaScript engineer. 
