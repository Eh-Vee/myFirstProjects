const bodyElement = document.querySelector('body');

bodyElement.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanElement = document.createElement('span');
    spanElement.style.left = `${xPos}px`;
    spanElement.style.top = `${yPos}px`; 
    const randomSize = Math.random() * 100;
    spanElement.style.width = randomSize + "px" ;
    spanElement.style.height = randomSize + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
}     
);