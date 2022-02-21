import { init } from './config';

let config = {
  HOST: '',
  TOKEN: '',
  SEARCH_WORD_API: '',
  SEARCH_WORD_BY_YOUDAO_API: '',
  LIST_FAVORITES_API: '',
  ADD_WORD_TO_NOTEPAD_API: '',
  REMOVE_WORD_FROM_NOTEPAD_API: ''
};
(async () => {
  await init();
  await new Promise(resolve => {
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(config, data => {
      config = data;
      resolve();
    });
  });
})();

export async function searchWordByMaimemo (word) {
  const result = {
    spelling: '',
    phoneticUk: '',
    phoneticUs: '',
    interpretation: ''
  };
  try {
    const data = await fetch(`${config.HOST}${config.SEARCH_WORD_API}?word=${word.trim().toLowerCase()}`, {
      headers: {
        Token: config.TOKEN
      }
    }).then(resp => resp.json());

    if (data.success) {
      const word = data.data.word;
      result.spelling = word.spelling;
      result.interpretation = word.interpretation;
    }
  } catch (err) {
    console.error(err);
  }
  return result;
}
export async function searchWordByyoudao (word) {
  let result;
  try {
    const data = await fetch(`${config.HOST}${config.SEARCH_WORD_BY_YOUDAO_API}?word=${word.trim().toLowerCase()}`, {
      headers: {
        Token: config.TOKEN
      }
    }).then(resp => resp.json());

    if (data.success) {
      result = data.data;
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
    const data = await fetch(`${config.HOST}${config.LIST_FAVORITES_API}?word=${word}`, {
      headers: {
        Token: config.TOKEN
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

export async function updateWordInNotepad (word, notepadId, action) {
  try {
    const url = action === 'add'
      ? config.ADD_WORD_TO_NOTEPAD_API
      : config.REMOVE_WORD_FROM_NOTEPAD_API;
    console.log(word, notepadId, action);
    const data = await fetch(config.HOST + url, {
      headers: {
        Token: config.TOKEN,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        word: word,
        notepad_id: notepadId
      })
    }).then(resp => resp.json());
    return data.success;
  } catch (err) {
    console.error(err);
  }
  return false;
}
