let boxes= document.querySelectorAll(".box");
let resetbttn = document.querySelector(".reset-bttn");
let newGameBtn =document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")   ;
let msg = document.querySelector("#msg");


let turn0 = true;
const winPattern = [
    [0,1,2] ,
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [3,4,5],
    [6,7,8],

];
 const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
 }

 const enableboxes = () => {
    for( let box of boxes ){
        box.disabled = false;
        box.innerText="";
    }
  }  
  const disableboxes = () => {
    for( let box of boxes ){
        box.disabled = true;
    }
  }
const showWinner = (winner) => {
    msg.innerText = 'congratulation ';
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showmsg = () =>{
    msg.innerText = ' start a new game';
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        
        if(turn0){
            box.innerText ="0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled=true;

        checkWinner();
       
    });
});
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if( pos1Val === pos2Val && pos2Val ===  pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                
            } else {
                showmsg();
            }

        }
            
    }
};
newGameBtn.addEventListener("click", resetGame);
resetbttn.addEventListener("click",resetGame);
 