var index = 0

function showImage(i) {
    index += i

    const images = document.querySelectorAll('.image')
    const dots = document.querySelectorAll('.dot');
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    if (index < 0) {
        index = images.length - 1
    }
    if (index > images.length - 1) {
        index = 0
    }

    images[index].style.display = 'block';
    dots[index].className += " active";
}

showImage(index)
let a = document.querySelector('.prev').onclick = showImage.bind(null, -1)
let b = document.querySelector('.next').onclick = showImage.bind(null, 1)



