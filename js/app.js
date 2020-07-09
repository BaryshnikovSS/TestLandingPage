const browserWidth = window.innerWidth
const img = document.querySelector(".js-arcticle");

if(browserWidth >= 1440) {
    img.src="./images/Broshure_dsctp.png"
}

window.addEventListener("resize", getSize)

function getSize() {
    const width = document.documentElement.clientWidth;

    if(width >= 1440) {
        img.src="./images/Broshure_dsctp.png"
    } else {
        img.src="./images/Broshure.png"
    }

    return
}


