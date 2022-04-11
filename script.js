let random1=Math.ceil(Math.random()*6);
let random2=Math.ceil(Math.random()*6);
let randomImage1="dice"+random1+".png"
let randomImage2="dice"+random2+".png"
let randomImageSource1="/images/"+randomImage1
let randomImageSource2="/images/"+randomImage2
let image1=document.querySelectorAll("img")[0]
let image2=document.querySelectorAll("img")[1]
image1.setAttribute("src",randomImageSource1)
image2.setAttribute("src",randomImageSource2)

function reload(){
    window.location.reload();
}

let winner=document.querySelector("#winner");

    if(random1>random2)
    winner.innerHTML="Player1 Wins"
    else if(random1<random2)
    winner.innerHTML="Player2 Wins"
    else
    winner.innerHTML="It's a Draw"
