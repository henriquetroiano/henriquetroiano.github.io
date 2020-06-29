export default function personalData() {
    
    const span = document.querySelector('#span span');

    span.addEventListener('click', function() { 
        const active1 = document.querySelector('.personalData')
        const active2 = document.querySelector('.personalData #span')
        // const active3 = document.querySelector('.personalData #resume')
    
        active1.classList.toggle('active')
        active2.classList.toggle('active')
        // active3.classList.toggle('active')
    })

    const arrowbtn = document.querySelector('#arrow span')

    arrowbtn.addEventListener('click', function() {
        const personalData = document.querySelector('.personalData');
        const arrowBtn = document.querySelector('#arrow span')
        const arrowContainer = document.getElementById('arrow');

        personalData.classList.toggle('opened')
        arrowbtn.classList.toggle('opened')
        arrowContainer.style.height = personalData.getClientRects(outerHeight)[0].height + "px";
        

     


    })













}