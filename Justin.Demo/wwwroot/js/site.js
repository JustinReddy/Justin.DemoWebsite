// Write your JavaScript code.

// https://jsfiddle.net/MrMavin/0gop9xp9/
document.addEventListener('DOMContentLoaded', function () {
    var body = document.body,
        html = document.documentElement;

    function getHeightInPixels() {
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) + 'px';
    }

    $(window).on('resize', function () {
        $('#particles-js').css({
            height: getHeightInPixels
        });
    });

    particlesJS("particles-js", { "particles": { "number": { "value": 13, "density": { "enable": true, "value_area": 1000 } }, "color": { "value": "#ffffff" }, "shape": { "type": "image", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "https://gdurl.com/0VzA", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 41.6, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 0.6, "direction": "top", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

    $('#particles-js').css({
        height: getHeightInPixels()
    });
});