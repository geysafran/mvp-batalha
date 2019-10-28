let imglist = [
    'desenho.jpg',
    'evelynduda.jpg',
    'DSC_0894.jpg',
    'DSC_1438.jpg',
    'DSC_1283.jpg',
    '/SC_0635.jpg',
    'vavamimi.jpg'
]

let counter = 0; 

let corpo = document.querySelector('box-img-home');


let img = document.createElement('img');
img.setAttribute('src', imglist [counter] );




let before = document.createElement('h1');
let beforeText = document.createTextNode('<');
before.appendChild(beforeText);


let next = document.createElement('h1');
let nextText = document.createTextNode('>');
next.appendChild(nextText);


    function init() {
    
        corpo.appendChild(before);
        corpo.appendChild(img);
        corpo.appendChild(next);
        
    }
before.addEventListener('click', function() {
    if (counter > 0 ){
        counter = counter - 1;
        img.setAttribute('src', imglist[counter])
    } else {counter = 5}
    img.setAttribute('src', imglist[counter])


   
})

next.addEventListener('click', function() {
    if (counter < 6 ){
        counter = counter + 1;
        img.setAttribute('src', imglist[counter])
    }  else {counter = 0}
    img.setAttribute('src', imglist[counter])
   
})

    init();
