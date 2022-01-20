chrome.contextMenus.create({
    type: 'normal',
    title: '墨墨搜词',
    id: 'm-search',
    contexts: ['selection'],
    onclick: search
})

function search(info, tab) {
    const url = 'https://lookup.maimemo.com/?limit=10&match=0.5&offset=0&type=%E5%85%A8%E9%83%A8&content=' + info.selectionText
    window.open(url, '_blank')
}