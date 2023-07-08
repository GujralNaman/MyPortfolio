const text = document.querySelector(".sec-text");
    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Web Developer...";
        }, 0);
        setTimeout(() => {
            text.textContent = "Coding Enthusiast...";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Technophile....";
        }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);

    var audio = new Audio("./a.wav");
        var numberOfButtons = document.querySelectorAll(".btn").length;
        for(var i=0; i<numberOfButtons; i++){
            document.querySelectorAll(".btn")[i].addEventListener("click",handleClick);
            function handleClick(){
                // alert("i got clicked");
                audio.play();
            }
        }