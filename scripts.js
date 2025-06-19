let items = document.querySelectorAll('.item');
let images = document.querySelectorAll('.slider-image');
let currentItem = 0;

function refreshPageCount(){
    document.getElementById('page').innerHTML = currentItem+1;
}

function removeListNavigation(){
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.slider-image.active').classList.remove('active');
    document.querySelector('.slider-image.prev').classList.remove('prev');
    document.querySelector('.slider-image.next').classList.remove('next');
}

function addImagesListNavigation(){
    images[currentItem].classList.add('active');
    images[(currentItem+1)%items.length].classList.add('next');
    images[(currentItem-1+items.length)%items.length].classList.add('prev');
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
        removeListNavigation()
        event.target.classList.toggle('active');
        while(!items[currentItem].classList.contains('active')){
            nextItem(currentItem);
        }
        addImagesListNavigation()
        refreshPageCount()
    }
}

const toLeft = (event) => {;
    removeListNavigation()
    prevItem(currentItem);
    items[currentItem].classList.add('active');
    addImagesListNavigation()
    refreshPageCount()
}

const toRight = (event) => {
    removeListNavigation()
    nextItem(currentItem);
    items[currentItem].classList.add('active');
    addImagesListNavigation()
    refreshPageCount()
}



document.querySelector('.item-wrapper').addEventListener('click', handleListClick);
document.querySelector('.left-arrow').addEventListener('click', toLeft);
document.querySelector('.right-arrow').addEventListener('click', toRight);