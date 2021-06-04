var popupx = document.querySelector('.popupx');

document.querySelector('.trig__but').addEventListener('click', function(){
    popupx.classList.add('show');
    popupx.style.display = 'block';
    popupx.style.transform = 'translateY(8rem)';
});

document.querySelector('.popupx__cross').addEventListener('click', function(){
    popupx.style.transform = 'translateY(80rem)';
  
});