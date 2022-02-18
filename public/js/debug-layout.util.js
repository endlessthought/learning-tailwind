/**
 * @functionality :  Script to debug layout
 * @author : Akshay
 */

const debugStyle = `
    /*! debug.css | MIT License | zaydek.github.com/debug.css */
    *:not(path):not(g) {
        color: hsla(210, 100%, 100%, 0.9) !important;
        background: hsla(210, 100%, 50%, 0.5) !important;
        outline: solid 0.15rem hsla(210, 100%, 100%, 0.5) !important;

        box-shadow: none !important;
    }`;

const bodyEl = document.querySelector("body");

const checkBoxEl = document.createElement("input");
checkBoxEl.setAttribute("type","checkbox");
checkBoxEl.setAttribute("id","debug");
checkBoxEl.setAttribute("title","check to debug layout");

checkBoxEl.style.position = "fixed"
checkBoxEl.style.top = "0"
checkBoxEl.style.left = "0"

var styleSheet;

checkBoxEl.addEventListener("change",()=>{
    
    if(checkBoxEl.checked){
        styleSheet = document.createElement("style");
        styleSheet.innerText = debugStyle;
        document.head.appendChild(styleSheet);

        checkBoxEl.addEventListener("change",()=>{
            if(!checkBoxEl.checked){
                styleSheet.remove()
            }
        })
    }
    
})

bodyEl.appendChild(checkBoxEl);