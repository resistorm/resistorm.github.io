var mountainElement;
var mountainBackElement;
var mountainBack2Element;
console.log("something")
var x = window.addEventListener("scroll", function () { scrollMountain(); });
mountainElement = document.getElementById("mountains");
mountainBackElement = document.getElementById("mountainsback");
mountainBack2Element = document.getElementById("mountainsback2");
var endOffset = window.innerHeight;
var inViewPort = window.pageYOffset < window.innerHeight;


function scrollMountain() {
    mountainElement = document.getElementById("mountains");
    endOffset = window.innerHeight;
    var yOffset = window.pageYOffset;
    console.log("on scroll: y " + yOffset + "    end " + endOffset)
    var scale = 1;
    if (yOffset <= endOffset) {
        if(!inViewPort){
            mountainBack2Element.classList.remove("fadable");
            mountainBackElement.classList.remove("fadable");
            mountainElement.classList.remove("fadable");
            document.getElementById("logo_container_head").classList.remove("fadable");
            inViewPort = true;
        }
        var factor = (yOffset / endOffset);
        var scaleProp = 1 + (factor / 5) * 3;
        var bottomOff = 100 * scaleProp;
        mountainElement.setAttribute('style', 'transform: scale(' + scaleProp + '); ' + 'bottom: -' + bottomOff + 'px;');
        scaleProp = 1 + (factor / 5) * 2;
        mountainBackElement.setAttribute('style', 'transform: scale(' + scaleProp + ')');
        scaleProp = 1 + (factor / 5) * 1;
        mountainBack2Element.setAttribute('style', 'transform: scale(' + scaleProp + ')');
    } else if(inViewPort){
        mountainElement.classList.add("fadable");
        mountainBackElement.classList.add("fadable");
        mountainBack2Element.classList.add("fadable");
        document.getElementById("logo_container_head").classList.add("fadable");
        inViewPort = false;
    }
    if(yOffset >= 2* window.innerHeight){
        window.location.href = "file:///C:/Users/daan-/engineering4solar%20Dropbox/Daan%20Mulders/01.%20RESISTORM/websites/site_RESISTORM/html/home.html";
    }

}
