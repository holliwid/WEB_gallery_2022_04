const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg'
                ];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    shadow_active()
    console.log(position);
    if (position >= pictures.length - 1) {
        change_bottom_img()
        position = 0
        img.src = pictures[position];
        return;
    }
    change_bottom_img()

    img.src = pictures[position + 1];
    position++;
    shadow_active()
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        change_bottom_img()
        return;
    }
    img.src = pictures[position - 1];
    position--;
    change_bottom_img()
    shadow_active()
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);


function change_bottom_img(){
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    

    if (position+2 < pictures.length) {
    img_1.src = `img/${position+1}.jpg`
    img_2.src = `img/${position+2}.jpg`
    img_3.src = `img/${position+3}.jpg`
    }
    else if (position+1 == pictures.length){
        img_1.src = `img/${position+1}.jpg`
        img_2.src = `img/1.jpg`
        img_3.src = `img/2.jpg`
    }
    else{
        img_1.src = `img/${position+1}.jpg`
        img_2.src = `img/${position+2}.jpg`
        img_3.src = `img/1.jpg`
    }

}

function click_on_img(number_of_img){
    img_numb = document.getElementById(number_of_img)

    img_carousel = document.getElementById(carousel)
    carousel.src = img_numb.src
    console.log(img_numb.src.slice(26,-4))
    if (Number(img_numb.src.slice(26,-4)) - 2 >= 0)
        position = Number(img_numb.src.slice(26,-4)) - 2
    else
        position = 0
    change_bottom_img()
    shadow_active()
}

function shadow_active(){
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    img_1.classList.remove("active-img")
    img_2.classList.remove("active-img")
    img_3.classList.remove("active-img")

    let img_carousel = document.getElementById("carousel")

    if (img_carousel.src == img_1.src){
        img_1.classList.add("active-img")
    }
    
    if (img_carousel.src == img_2.src){
        img_2.classList.add("active-img")
    }
    
    if (img_carousel.src == img_3.src){
        img_3.classList.add("active-img")
    }
}