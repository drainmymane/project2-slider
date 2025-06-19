let items = document.querySelectorAll('.item');
let images = document.querySelectorAll('.slider-image');
let currentItem = 0;

function refreshPageCount(){
    document.getElementById('page').innerHTML = currentItem+1;
}

function toggleActiveState(element){
    element.classList.toggle('active');
}

const changeCurrentItem = (n) =>{
    currentItem = (n+items.length) % items.length;
}

const prevItem = (n) =>{
    changeCurrentItem(n-1);
}

const nextItem = (n) =>{
    changeCurrentItem(n+1);
}

const handleListClick = (event) => {
    if (event.target.tagName === 'LI') {
        document.querySelector('.item.active').classList.toggle('active');
        document.querySelector('.slider-image.active').classList.toggle('active');
        /*document.querySelector('.item.prev').classList.toggle('prev');
        document.querySelector('.item.next').classList.toggle('next');*/
        event.target.classList.toggle('active');
        while(!items[currentItem].classList.contains('active')){
            nextItem(currentItem);
        }
        images[currentItem].classList.toggle('active');
        // items[(currentItem+1)%items.length].classList.toggle('next');
        // items[(currentItem-1+items.length)%items.length].classList.toggle('prev');
        refreshPageCount()
        
    }
}

const toLeft = (event) => {
    document.querySelector('.item.active').classList.toggle('active');
    document.querySelector('.slider-image.active').classList.toggle('active');
    prevItem(currentItem);
    items[currentItem].classList.toggle('active');
    images[currentItem].classList.toggle('active');
    refreshPageCount()
}

const toRight = (event) => {
    document.querySelector('.item.active').classList.toggle('active');
    document.querySelector('.slider-image.active').classList.toggle('active');
    nextItem(currentItem);
    items[currentItem].classList.toggle('active');
    images[currentItem].classList.toggle('active');
    refreshPageCount()
}

document.querySelector('.item-wrapper').addEventListener('click', handleListClick);
document.querySelector('.left-arrow').addEventListener('click', toLeft);
document.querySelector('.right-arrow').addEventListener('click', toRight);