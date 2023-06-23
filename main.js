window.addEventListener('DOMContentLoaded', (event) => {

    /**
     * Anime.js
     * @type {{}}
     */
    const animation =  anime({
        targets: '.circle',
        translateY: 850,
        rotate: '1turn',
        scale: 3,
        direction: 'alternate',
        easing: 'easeInOutSine',
        backgroundColor: '#6a0729',
        time: 2000,
        loop: true
    });

    /**
     * Start and stop animation
     */
    const startAnimation = () => {
        animation.play();
    }

    const stopAnimation = () => {
        animation.pause();
    }

    /**
     * Event listener
     */
    window.addEventListener('click', () => {
        if (document.querySelector('.circle').classList.contains('anime')) {
            stopAnimation();
            document.querySelector('.circle').classList.remove('anime');
        } else {
            startAnimation();
            document.querySelector('.circle').classList.add('anime');
        }
    });

});



