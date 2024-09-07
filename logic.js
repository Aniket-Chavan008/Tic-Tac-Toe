let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let alternate = true; // player x, player O
let count = 0;
const comb=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(alternate)
            {
                box.innerText="O";
                alternate=false;
            }
        else
            {
                box.innerText="X";
                alternate=true;
            }
        box.disabled = true;
        count++;
        let temp = checkWinner();
        if(count === 9 && !temp)
            console.log("Match draw");
        else
           checkWinner();
    });
});
const checkWinner = () =>{
    for(let check of comb){
        let pos1 = boxes[check[0]].innerText;
        let pos2 = boxes[check[1]].innerText;
        let pos3 = boxes[check[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                alert(`Winner is ${pos1}`);
                for(let i =0;i<9;i++)
                    {
                        boxes[i].disabled=true;
                    }    
            }
        }
    }  
};
reset.addEventListener("click",()=>{
    for(let i=0; i<9; i++){
      boxes[i].innerText = "";
      boxes[i].disabled = false;
    }
});
