buttons= document.querySelectorAll('.faq-toggle');
cards = document.querySelectorAll('.card').forEach((card)=> {
    card.classList.remove("active");
});

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=> {
        parent = btn.parentNode.parentNode;
        parent.classList.toggle("active");
    })
}
    
);