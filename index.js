const text = document.querySelector(".sec-text");
    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Web Developer...";
        }, 0);
        setTimeout(() => {
            text.textContent = "Coding Enthusiast...";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Learner....";
        }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);