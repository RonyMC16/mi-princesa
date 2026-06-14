function changeScreen(id){

    document.querySelectorAll(".screen")
    .forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id)
    .classList.add("active");
}

function openLetter(){
    changeScreen("letter");
}

function showCounter(){
    changeScreen("counterSection");
}

function showGallery(){
    changeScreen("gallery");
}

function showQuestion(){
    changeScreen("question");
}

function showFinal(){
    changeScreen("final");

    createHearts();
}

const startDate = new Date("2025-11-17");

function updateCounter(){

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("counter").innerHTML =
        `${days} días juntos ❤️`;
}

setInterval(updateCounter,1000);
updateCounter();

function createHearts(){

    for(let i=0;i<50;i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(Math.random()*20+20)+"px";
        heart.style.animation="floatUp 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);
    }
}

const style = document.createElement("style");

style.innerHTML=`
@keyframes floatUp{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-120vh);
        opacity:0;
    }
}
`;

document.head.appendChild(style);