import { SEARCH_WORD_API, TOKEN, LIST_FAVORITES_API } from './config';

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

export async function listFavorites (word) {
  const result = [{
    id: 1,
    title: '我的收藏 1',
    is_private: true,
    is_selected: true
  }, {
    id: 2,
    title: '我的收藏 2',
    is_private: false,
    is_selected: false
  }];

  try {
    const data = await fetch(`${LIST_FAVORITES_API}?word=${word.trim().toLowerCase()}`, {
      headers: {
        Token: TOKEN
      }
    }).then(resp => resp.json());
    if (data.success && data.data.favorites.length) {
      return data.data.favorites;
    }
  } catch (err) {
    console.error(err);
  }
  return result;
}