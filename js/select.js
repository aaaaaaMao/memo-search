const mainDiv = document.createElement('div')
mainDiv.style.position = 'absolute'
mainDiv.style.display = 'none'
mainDiv.style.alignItems = 'flex-start'

mainDiv.innerHTML = `
<img id='mms-icon' 
src="https://www.maimemo.com/res/images/site/logo4.png"
style="width: 40px; height: 40px;"/>

<div id="mms-content-div"
    style="
    margin-left: 10px; 
    border-radius: 5px; 
    font-size: 16px;
    background: #469F87;
    width: 200px;
    ">
    <div id="mms-bar"
        style="
        height: 25px;
        background: #469F87;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        ">
    </div>
    <div id="mms-word-detail-div"
        style="
        padding: 5px; 
        font-size: 12px; 
        background: #FFFFFF;
        margin: 2px;
        border-radius: 5px;
        ">
        <span id="mms-spelling"
            style="
            color: #D56635; 
            font-size: 16px;
            font-weight: bold;
            display: block;
            ">Oops</span>
        
        <div id="mms-phonetic-uk" style="margin-top: 2px;">
            <span>英 [ʊps]</span>
        </div>
        <div id="mms-phonetic-us" style="margin-top: 2px;">
            <span>美 [ʊpsˌuːps]</span>
        </div>

        <div id="mms-interpretation" style="margin-top: 5px;">
            <span>int. 哎哟，啊呀（某人摔倒或出了点小差错时的用语）</span>
        </div>
        
        <div class="mms-dotted-line" style="
        margin-top: 10px;
        height: 1px;
        background-image: linear-gradient(to left, #469F87 50%, #ffffff 50%);
        background-position: bottom;
        background-size: 8px 1px;
        background-repeat: repeat-x;
        "></div>
    </div>
</div>
`

document.body.appendChild(mainDiv)

const contentDiv = document.getElementById('mms-content-div')
contentDiv.style.display = 'none'

const searchIcon = document.getElementById('mms-icon')

window.onmouseup = function(event) {
    const selection = window.getSelection();
    const content = selection.toString().trim()
    const srcElement = event.srcElement

    if (srcElement.id !== 'mms-icon') {
        if (content) {
            const coord = getCoord({
                x: event.clientX,
                y: event.clientY
            }, {
                x: 10,
                y: 0
            })

            mainDiv.style.top = `${coord.y}px`
            mainDiv.style.left = `${coord.x}px`
            mainDiv.style.display = 'flex'

            document.getElementById('mms-spelling').innerHTML = content
        } else {
            mainDiv.style.display = 'none'
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

searchIcon.onclick = function(event) {
    // const width = Math.floor(Math.random() * 100) + 200
    // const height = Math.floor(Math.random() * 100) + 220
    // contentDiv.style.width = `${width}px`
    // contentDiv.style.height = `${height}px`
    contentDiv.style.display = 'inline-block'
}