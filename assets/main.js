let imglist = [
    'assets/mudin.jpg',
    'assets/mudin.jpg',
    'assets/mudin.jpg',
    'assets/mudin.jpg',
    'assets/mudin.jpg',
    'assets/mudin.jpg',
    'assets/mudin.jpg'
];
let counter = 0; 

let corpin = document.querySelector('box-img-home');

// Imagem
let img = document.createElement('img');
img.setAttribute('src', imglist [counter] );



// Setinha de voltar
let before = document.createElement('h4');
let beforeText = document.createTextNode('<');
before.appendChild(beforeText);

// Setinha de adiantar
let next = document.createElement('h4');
let nextText = document.createTextNode('>');
next.appendChild(nextText);


    function init() {
        
        corpin.appendChild(before);
        corpin.appendChild(img);
        corpin.appendChild(next);
        
    }
///before
before.addEventListener('click', function() {
    if (counter > 0 ){
        counter = counter - 1;
        img.setAttribute('src', imglist[counter])
    } else {counter = 5}
    img.setAttribute('src', imglist[counter])


   
})
///next
next.addEventListener('click', function() {
    if (counter < 6 ){
        counter = counter + 1;
        img.setAttribute('src', imglist[counter])
    }  else {counter = 0}
    img.setAttribute('src', imglist[counter])
   
})

    init();