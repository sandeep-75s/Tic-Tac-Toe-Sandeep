const box = document.querySelectorAll(".box");
const newgame = document.querySelectorAll(".new");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const show = document.querySelector(".show-result");
let flag = 0;
let count =0;
let arr = Array.from(box);

function handle(){
    arr.forEach(box => {
        box.addEventListener("click",(e)=>{
            if(e.target.innerHTML==""){
                if(flag==0){
                    show.innerHTML = "Now O Tern";
                    e.target.innerHTML = "X";
                    e.target.style.color = "red";
                    flag=1;
                    count++;
                }
                else{
                    show.innerHTML = "Now X Tern";
                    e.target.innerHTML = "O"
                    e.target.style.color = "yellow";
                    flag=0;
                    count++;
                }
                checkwinner();
            }
            
        })
    });
}

function checkwinner(){
    if(box1.innerHTML!=""&& box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML ){
        show.innerHTML = `Winner is ${box1.innerHTML}`;
        box1.style.backgroundColor = "green";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box4.innerHTML!=""&& box4.innerHTML===box5.innerHTML && box4.innerHTML===box6.innerHTML ){
        show.innerHTML = `Winner is ${box4.innerHTML}`;
        box4.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box7.innerHTML!=""&& box7.innerHTML===box8.innerHTML && box7.innerHTML===box9.innerHTML ){
        show.innerHTML = `Winner is ${box7.innerHTML}`;
        box7.style.backgroundColor = "green";
        box8.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box1.innerHTML!=""&& box1.innerHTML===box4.innerHTML && box1.innerHTML===box7.innerHTML ){
        show.innerHTML = `Winner is ${box1.innerHTML}`;
        box1.style.backgroundColor = "green";
        box4.style.backgroundColor = "green";
        box7.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box2.innerHTML!=""&& box2.innerHTML===box5.innerHTML && box2.innerHTML===box8.innerHTML ){
        show.innerHTML = `Winner is ${box2.innerHTML}`;
        box2.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box8.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box3.innerHTML!=""&& box3.innerHTML===box6.innerHTML && box3.innerHTML===box9.innerHTML ){
        show.innerHTML = `Winner is ${box3.innerHTML}`;
        box3.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box1.innerHTML!=""&& box1.innerHTML===box5.innerHTML && box1.innerHTML===box9.innerHTML ){
        show.innerHTML = `Winner is ${box1.innerHTML}`;
        box1.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(box3.innerHTML!=""&& box3.innerHTML===box5.innerHTML && box3.innerHTML===box7.innerHTML ){
        show.innerHTML = `Winner is ${box3.innerHTML}`;
        box3.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box7.style.backgroundColor = "green";
        arr.forEach(box=>{
            box.style.pointerEvents = "none";
        });
    }
    else if(count==9){
        show.innerHTML = "Game Tie";
    }
}

function newga(){
    arr.forEach(box=>{
        box.innerHTML = "";
        box.style.backgroundColor = "transparent";
        show.innerHTML = "Now X Tern";
        flag=0;
        count = 0;
        arr.forEach(box=>{
            box.style.pointerEvents = "all";
        });
    })
}
handle();