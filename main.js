let button1=document.querySelector('.button1')
let button2=document.querySelector('.button2')
let div1=document.querySelector('.div-1')
let div2=document.querySelector('.div-2')
let div4=document.querySelector('.div-4')
button1.addEventListener('click',()=>{
    div2.style.display='flex';
    div4.style.display='flex';
    div1.style.display='none';
})
button2.addEventListener('click',()=>{
    div2.style.display='none';
    div1.style.display='flex';
    div4.style.display='none';
})
div4.addEventListener('click',()=>{
    div2.style.display='none';
    div1.style.display='flex';
    div4.style.display='none';
})
