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


function moveRight_alt(){
    let img = document.getElementById("carousel").src.slice(22)
    let index = pictures.indexOf(img)
    console.log(index)
    if (index < pictures.length - 1){
        document.getElementById("carousel").src = pictures[index+1]
    }
    else{
        document.getElementById("carousel").src = pictures[0]
    }
}


function moveLeft_alt(){
    let img = document.getElementById("carousel").src.slice(22)
    let index = pictures.indexOf(img)
    console.log(index)
    if (index != 0){
        document.getElementById("carousel").src = pictures[index-1]
    }
    else{
        document.getElementById("carousel").src = pictures[pictures.length-1]
    }
}



rightBtn.addEventListener("click", moveRight_alt);
leftBtn.addEventListener("click", moveLeft_alt);


function change_bottom_img_right(){
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    let index = pictures.indexOf(img_1.src.slice(22))
    console.log(index)

    if (index+3 < pictures.length) {
        console.log(index+1)
    img_1.src = `img/${index+2}.jpg`
    img_2.src = `img/${index+3}.jpg`
    img_3.src = `img/${index+4}.jpg`
    }
    else if (index+3 == pictures.length){
        img_1.src = `img/${index+2}.jpg`
        img_2.src = `img/${index+3}.jpg`
        img_3.src = `img/1.jpg`
    }
    else if (index+2 == pictures.length){
        img_1.src = `img/${index+2}.jpg`
        img_2.src = `img/1.jpg`
        img_3.src = `img/2.jpg`
    }
    else{
        img_1.src = `img/1.jpg`
        img_2.src = `img/2.jpg`
        img_3.src = `img/3.jpg`
    }
}

function change_bottom_img_left(){
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    let index = pictures.indexOf(img_3.src.slice(22))

    if (index-3 >= 0) {
        img_1.src = `img/${index-2}.jpg`
        img_2.src = `img/${index-1}.jpg`
        img_3.src = `img/${index}.jpg`
    }
    else if (index-3 == -1){
        img_1.src = `img/${pictures.length}.jpg`
        img_2.src = `img/1.jpg`
        img_3.src = `img/2.jpg`
    }
    else if (index-3 == -2){
        img_1.src = `img/${pictures.length-1}.jpg`
        img_2.src = `img/${pictures.length}.jpg`
        img_3.src = `img/1.jpg`
    }
    else{
        img_1.src = `img/${pictures.length-2}.jpg`
        img_2.src = `img/${pictures.length-1}.jpg`
        img_3.src = `img/${pictures.length}.jpg`
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


let left_btn_button = document.getElementById("left-btn-button")
let right_btn_button= document.getElementById("right-btn-button")



const moveRight_button = () => {
    change_bottom_img_right()
    shadow_active()
}

const moveLeft_button = () => {
    change_bottom_img_left()
    shadow_active()
}

left_btn_button.addEventListener("click", moveLeft_button);
right_btn_button.addEventListener("click", moveRight_button);