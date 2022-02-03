import { SEARCH_WORD_API, TOKEN } from './config';

export async function searchWord (word) {
  const result = {
    spelling: 'Oops',
    phoneticUk: '英 [ʊps]',
    phoneticUs: '美 [ʊpsˌuːps]',
    interpretation: 'int. 哎哟，啊呀（某人摔倒或出了点小差错时的用语）'
  };
  try {
    const data = await fetch(`${SEARCH_WORD_API}?word=${word.trim().toLowerCase()}`, {
      headers: {
        Token: TOKEN
      }
    }).then(resp => resp.json());

    if (data.success) {
      const word = data.data.word;
      result.spelling = data.data.spelling;
      result.phoneticUk = `英 ${word.phonetic_uk}`;
      result.phoneticUs = `美 ${word.phonetic_us}`;
      result.interpretation = word.interpretation;
    }
  } catch (err) {
    console.error(err);
  }
  return result;
}
