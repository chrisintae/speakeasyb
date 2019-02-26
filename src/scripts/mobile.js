function debounce(f) {
    let timer;

    return function(e) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(f, 100, e);

        return function() {
            console.log('check');
        }
    }
}

function resize() {
    if (window.innerWidth < 600) {
        console.log('600')
    } else {
        console.log('over')
    };
}

window.onresize = debounce;

let currImg = 0;
let el = document.getElementById('awardsList');
let images = el.children;

function mobileSlider() {
    let i;

    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
}

function awardsVisible() {
    let i;

    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'inline-block';
    }
}