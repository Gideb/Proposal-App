const marry = document.getElementById('marry');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const close = document.getElementById('close');
const reply = document.getElementById('reply');


marry.showModal(); 

reply.style.visibility = "hidden";


//only allow exit on yes
yes.addEventListener('click', () => {
    marry.close();
    reply.style.visibility = "visible";
});

//reopen if no is clicked
no.addEventListener('click', () => {
    marry.close();
    setTimeout(() => marry.showModal(), 10);
});

//reopen if x is clicked
close.addEventListener('click', (e) => {
    marry.close();
    setTimeout(() => marry.showModal(), 10);
});


//prevent closing with ESC or clicking outside the box
marry.addEventListener('cancel', (e) => {
    e.preventDefault();
});
marry.addEventListener('close', (e) => {
    if (reply.style.visibility !== "visible") {
        setTimeout(() => marry.showModal(), 10);
    }
});