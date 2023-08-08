const button=document.querySelector("#hamberger")
const navi=document.querySelector("#navigation-bar")
function handlenavigation(){
    let hidden = navi.className;
    if(hidden==="hidden"){
        navi.className="";
        console.log("열림")
    }
    else{
        navi.className="hidden"
        console.log(hidden)
    }
}

document.addEventListener("click",handlenavigation);