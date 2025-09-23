
document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.getElementById('marquee');
    const paragraph = document.getElementById('moving-paragraph');

   
    marquee.addEventListener('mouseover', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseout', () => {
        marquee.style.animationPlayState = 'running';
    });
});
