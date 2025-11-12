let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");

let turnO=true;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if(turnO)
        {
            box.innerText="X";
            turnO=false;
        }
        else
        {
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

let resetGame=()=>{
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
        msg.innerText="";
    })
}


reset.addEventListener('click',resetGame);

let displayWinner=(winner)=>{
    
    msg.innerText=`Congratulations. Winner is ${winner}`;
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const checkWinner=() => {
    for(let pattern of patterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if((pos1 === pos2)&&(pos2 === pos3))
            {
                displayWinner(pos1);
            }
        }

    }

}

