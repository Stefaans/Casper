import { Casper, Kent, Engineer } from '@/personas';

const personas = {
  casper: Casper,
  kent: Kent,
  engineer: Engineer
}

const openAiModels = {
  // Available models: https://platform.openai.com/docs/models
  gpt35: 'gpt-3.5-turbo', // GPT-3.5 is available by default
  gpt4: 'gpt-4', // Access to the GPT-4 model required; see https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
}

export const Config = {
  model: openAiModels.gpt35,
  persona: personas.casper
}

console.log('openAi model', Config.model);
