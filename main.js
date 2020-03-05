// Vivaldi JS Example

// When You clicl Season:
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring)


function setSummer() {
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Summer';
    // Change Main image
    document.getElementById('main-img').src = 'images/summer.jpg';

    // Change bkground
    document.body.style.backgroundColor = '#1BA848';

    // change Audio
    document.getElementById('song').src = 'songs/vivaldi-summer.mp3';

    // Update Border
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    document.getElementById('summerBtn').classList.add('activeBtn');
}

function setAutumn() {
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Autumn';
    // Change Main image
    document.getElementById('main-img').src = 'images/autumn.jpg';

    // Change bkground
    document.body.style.backgroundColor = '#FE6732';

    // change Audio
    document.getElementById('song').src = 'songs/vivaldi-autumn.mp3';

    // Update Border
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    document.getElementById('autumnBtn').classList.add('activeBtn');
}

function setWinter() {
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Winter';
    // Change Main image
    document.getElementById('main-img').src = 'images/winter.jpg';

    // Change bkground
    document.body.style.backgroundColor = '#1C64B9';

    // change Audio
    document.getElementById('song').src = 'songs/vivaldi-winter.mp3';

    // Update Border
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');

    document.getElementById('winterBtn').classList.add('activeBtn');
}

function setSpring() {
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Spring';
    // Change Main image
    document.getElementById('main-img').src = 'images/spring.jpg';

    // Change bkground
    document.body.style.backgroundColor = '#0E94D1';

    // change Audio
    document.getElementById('song').src = 'songs/vivaldi-spring.mp3';

    // Update Border
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');

    document.getElementById('springBtn').classList.add('activeBtn');
}