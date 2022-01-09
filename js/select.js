const div = document.createElement('div')
div.innerHTML = `
<img id="icon" src="https://www.maimemo.com/res/images/site/logo4.png" style="width: 40px; height: 40px"/>
`
div.style.position = 'absolute'
div.style.display = 'none'

document.body.appendChild(div)

window.onmouseup = function(event) {
    const selection = window.getSelection();
    const content = selection.toString().trim()
    const srcElement = event.srcElement
    if (srcElement.id !== 'icon') {
        if (content) {
            div.style.top = `${event.clientY + document.documentElement.scrollTop + document.body.scrollTop}px`
            div.style.left = `${event.clientX + 10 + document.documentElement.scrollLeft + document.body.scrollLeft}px`
            div.style.display = 'inherit'
        } else {
            div.style.display = 'none'
        }
    }
}