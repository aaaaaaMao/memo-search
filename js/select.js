const div = document.createElement('div')
div.style.position = 'absolute'
div.style.display = 'none'
div.style.alignItems = 'flex-start'

const icon = document.createElement('img')
icon.id = 'icon'
icon.src = 'https://www.maimemo.com/res/images/site/logo4.png'
icon.style.width = '40px'
icon.style.height = '40px'

div.appendChild(icon)
document.body.appendChild(div)

const contentDiv = document.createElement('div')
contentDiv.id = 'content'
contentDiv.style.background = '#469F87'
contentDiv.style.marginLeft = '10px'
contentDiv.style.display = 'none'
contentDiv.style.borderRadius = '5px'
contentDiv.style.color = '#FFFFFF'
contentDiv.style.fontSize = '16px'
contentDiv.style.padding = '4px'

div.appendChild(contentDiv)

window.onmouseup = function(event) {
    const selection = window.getSelection();
    const content = selection.toString().trim()
    const srcElement = event.srcElement
    if (srcElement.id !== 'icon') {
        if (content) {
            const coord = getCoord({
                x: event.clientX,
                y: event.clientY
            }, {
                x: 10,
                y: 0
            })

            div.style.top = `${coord.y}px`
            div.style.left = `${coord.x}px`
            div.style.display = 'flex'

            contentDiv.innerHTML = content
        } else {
            div.style.display = 'none'
        }
    }
    contentDiv.style.display = 'none'
}

function getCoord(base, offset) {
    return {
        x: base.x + offset.x + document.documentElement.scrollLeft + document.body.scrollLeft,
        y: base.y + offset.y + document.documentElement.scrollTop + document.body.scrollTop
    }
}

icon.onclick = function(event) {
    const width = Math.floor(Math.random() * 100) + 200
    const height = Math.floor(Math.random() * 100) + 220
    contentDiv.style.width = `${width}px`
    contentDiv.style.height = `${height}px`
    contentDiv.style.display = 'inline-block'
}