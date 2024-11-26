console.log("Welcome to TicTacToe");
let music=new Audio("music.mp3");
let turn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3");
let pturn = "X";
let isgameover=false;
let count=0;
let resize=document.getElementById('reset')
const changeTurn = ()=>{
    return pturn==="X"?"O":"X";
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            gameover.play();

        }
    })
}
//music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==='')
            {
                boxtext.innerText=pturn;
                count=count+1;
                console.log(count);
                pturn=changeTurn();
                turn.play();
                checkWin();
                if(!isgameover && count<9)
                    {
                        document.getElementsByClassName("info")[0].innerText="Turn for " + pturn;
                    }
                else if (!isgameover && count == 9) {
                            document.getElementsByClassName("info")[0].innerText = "Tie";
                           
            }
        }
    })
    
   
})
resize.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    pturn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + pturn;
    count=0;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
    gameover.pause();
})