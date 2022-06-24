const tap = document.querySelector("#tap")
const none = document.querySelector("#html_block")
const blok = document.querySelector(".game-start")
const bosh = document.querySelector("#bosh")
const bosh2 = document.querySelector("#bosh2")
const boshBut = document.getElementById("bosh_but")
const win = document.getElementById("winner")
const win2 = document.getElementById("winner2")
const clear = document.getElementById("clear")
const plne = document.getElementById("player_name")
const plne2 = document.getElementById("player_name2")




tap.addEventListener("click", function (){
    none.style.display="none"
    blok.style.display="block"
})

const pr = prompt(" Player Name 1 ")
const pr2 = prompt(" Player Name 2")
 
plne.innerText = pr;
plne2.innerText = pr2;
let player1;
let player2;
boshBut.addEventListener("click" , function (){
    player1 = Math.floor(Math.random() * 100);
    player2 = Math.floor(Math.random() * 100);

    bosh.textContent = player1;
    bosh2.textContent = player2;

    if(player1 < player2){
        win.append(player1 = " win")
    }
    if(player1 > player2){
        win2.append(player2 = " win")
    }
    clear.addEventListener("click",function (){
        win.remove();
        win2.remove();
    })

 
})





// const yosh = 50;

// if(yosh >= pr){
//     console.log("maktabga kirdi")
// }else if(yosh <= pr);{
//     console.log("kirmadi");
// }

// const addnum = prompt("raqam kiriting")


//  if(addnum == 7 ){
//     console.log("########")

//  }else if( addnum == 10){
//     console.log("########")
    
//  }else if(addnum == 12){
//     console.log("########")

//  }

 

    //bosh2.innerHTML = Math.floor(Math.random() * 100);