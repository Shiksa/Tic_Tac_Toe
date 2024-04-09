let body = document.querySelector("body");
let modeBtn = document.querySelector("#modeBtn");
let msgContainer=document.querySelector(".msgContainer");
let msgContainerDraw=document.querySelector(".msgContainerDraw");
let button = document.querySelectorAll(".box");
let win = document.querySelector(".win");
let draw = document.querySelector(".draw");
let rstBtn= document.querySelectorAll(".rstBtn");

let currMode = "light";
var cheers=new Audio("../Assets/Music/Cherrs.mp3");
modeBtn.addEventListener("click", () => {
    if (currMode == "light") {
        alert("Im shifting to Dark");
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("white");
    }
    else {
        currMode = "light";
        alert("Im shifting to light");
        body.classList.add("white");
        body.classList.remove("dark");
    }
})

/* Game Part*/
let turnX = true; //turnX,turnO
let count=0;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// const rstGame=()=>{
//     turnX=true;
//     msgContainer.classList.add("hide");
//     msgContainerDraw.classList.add("hid");
//     enableBtn();
//     console.log("this game has been restarted");
// }
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log("this box was clicked");
        if (turnX == true) {
            btn.innerText = "X";
            turnX = false;
        }
        else {
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled=true;
        checkWinner();
        count++;
        // let isWinner=checkWinner();
        var isWinner = true;
        console.log(isWinner);
        if(count===9 && !isWinner){
            console.log("its a draw");
            drawWinner();
        }
    }
)
})
let disableBtn=()=>{for(btn of button){
    btn.disabled=true;
}};
let enableBtn=()=>{for(btn of button){
    btn.disabled=false;
    btn.innerText="";
}}
let showWinner=(winner)=>{
    win.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
let drawWinner=()=>{
    draw.innerText=`Match Draw`;
    msgContainerDraw.classList.remove("hid");
    disableBtn();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(button[pattern[0]].innerText,button[pattern[1]].innerText,button[pattern[2]].innerText);
        let posVal1=button[pattern[0]].innerText; 
        let posVal2= button[pattern[1]].innerText;
        let posVal3= button[pattern[2]].innerText;
        if(posVal1 !=''&& posVal2 !=''&& posVal3 !='')
        {
            if(posVal1==posVal2&&posVal2==posVal3){
                cheers.play();
                console.log(`winner ${posVal1}`);
                showWinner(posVal1);
                disableBtn();
                // return true;
            }
            else
                isWinner = false;
        }
    }
}
rstBtn.forEach((e)=>{
    e.addEventListener("click", ()=>{
        turnX=true;
        msgContainer.classList.add("hide");
        msgContainerDraw.classList.add("hid");
        enableBtn();
        console.log("this game has been restarted");
})
})