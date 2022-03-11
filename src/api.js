import { init } from './config';

let config = {
  HOST: '',
  TOKEN: '',
  SEARCH_WORD_API: '',
  LIST_FAVORITES_API: '',
  ADD_WORD_TO_NOTEPAD_API: '',
  REMOVE_WORD_FROM_NOTEPAD_API: '',
  LOGIN_API: '',
  USER_PROFILE_API: '',
  user: null
};
(async () => {
  await init();
  await reloadConfig();
})();

export async function searchWord (word) {
  const result = {
    spelling: 'Oops',
    phoneticUk: '英 [ʊps]',
    phoneticUs: '美 [ʊpsˌuːps]',
    interpretation: 'int. 哎哟，啊呀（某人摔倒或出了点小差错时的用语）'
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

export async function login (identity, password) {
  try {
    const url = config.HOST + config.LOGIN_API;

    const data = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        identity,
        password
      })
    }).then(resp => resp.json());

    config.TOKEN = data.data.token.token;
    const user = await getUserProfile();
    await setLocalStorage({
      TOKEN: data.data.token.token,
      user
    });
    await reloadConfig();
    return data.success;
  } catch (err) {
    console.log(err);
  }
  return false;
}

export async function getUserProfile () {
  try {
    const data = await fetch(`${config.HOST}${config.USER_PROFILE_API}`, {
      headers: {
        Token: config.TOKEN
      }
    }).then(resp => resp.json());
    if (data.success) {
      return data.data.user;
    }
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function setLocalStorage (data) {
  return new Promise(resolve => {
    // eslint-disable-next-line no-undef
    chrome.storage.local.set(data, resolve);
  });
}

export async function getLocalStorage (object) {
  return new Promise(resolve => {
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(object, resolve);
  });
}

async function reloadConfig () {
  console.log(config);
  config = Object.assign(
    config,
    await getLocalStorage(config)
  );
}
