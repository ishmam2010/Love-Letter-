// Love Letter Typing Text

const text = `Dear My Love ❤️

Every day with you is my favorite memory.

You make my life brighter,
my heart happier,
and my world more beautiful.

No matter what happens,
I will always stand beside you.

Thank you for being part of my life.

I Love You Forever ❤️🌹`;

const typing = document.getElementById("typing");
let i = 0;

function typeWriter(){
    if(i < text.length){
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,40);
    }
}

document.getElementById("openBtn").addEventListener("click",()=>{

    typing.innerHTML="";
    i=0;
    typeWriter();

});

// Floating Hearts

const hearts=document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,300);

// Sparkles

for(let i=0;i<80;i++){

    let star=document.createElement("div");

    star.className="sparkle";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.body.appendChild(star);

}
