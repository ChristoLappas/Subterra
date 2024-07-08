const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});


<!--CAROUSEL-->
const data = [
    {roomName:'one',
        photos:['src1','src2']
    }
]
let image = document.querySelector("#carousel-img");
let fade = document.getElementsByClassName("fade");
let dotIndex = 0;
let slideTextNumber = document.querySelector(".caroussel-slide-number");
let selectedDots = document.getElementsByClassName("caroussel-dot");

selectedDots[0].style.backgroundColor = "black";
showImage(1);

let currentUpdateDotsTimeout = setTimeout(updateDots, 4000);

function updateDots()
{
    dotIndex++;
    dotIndex %= selectedDots.length;
    console.log(dotIndex);
    selectedDots[dotIndex].style.backgroundColor = "black";
    selectedDots[(dotIndex + selectedDots.length - 1)%selectedDots.length].style.backgroundColor = "#bbb";

    showImage(dotIndex + 1);
    clearTimeout(currentUpdateDotsTimeout);
    currentUpdateDotsTimeout = setTimeout(updateDots, 4000);
}
function clearDots() {
    for (let i = 0; i < selectedDots.length; i++) {
        selectedDots[i].style.backgroundColor = "#bbb";
    }
}
<!--Dots selector-->
for (let i = 0; i < selectedDots.length; i++)
{
    selectedDots[i].addEventListener("click", () =>
    {
        showImage(i + 1);
        clearDots();
        selectedDots[i].style.backgroundColor = "black";
        dotIndex = i;
        clearTimeout(currentUpdateDotsTimeout);
        currentUpdateDotsTimeout = setTimeout(updateDots, 3000);
        console.log("clicked");
    })
}
function showImage(index)
{
    image.src = `assets1/caroussel/foto${index}.jpg`;
}

/*Pop Up

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

<!--MOBILE-->
let links = document.getElementById('myLinks');
document.getElementById('hamburger').addEventListener('click',function (){
    if (links.style.display === "flex"){
        links.style.display = 'none';
    }
    else{
        links.style.display = 'flex';
    }
})