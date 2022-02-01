import { SEARCH_WORD_API, TOKEN } from './config';

export async function searchWord (word) {
  const response = await fetch(`${SEARCH_WORD_API}?word=${word.trim().toLowerCase()}`, {
    headers: {
      Token: TOKEN
    }
  });
  const data = await response.json();
  if (data.success) {
    const word = data.data.word;
    return {
      phoneticUk: `英 ${word.phonetic_uk}`,
      phoneticUs: `美 ${word.phonetic_us}`,
      interpretation: word.interpretation
    };
  }
  return null;
}
