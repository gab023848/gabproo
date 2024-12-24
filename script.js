document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    const playMusic = () => {
        audio.play().then(() => {
            playButton.style.display = 'none';
        }).catch((error) => {
            playButton.style.display = 'block';
        });
    };

    playMusic();

    playButton.addEventListener('click', () => {
        playMusic();
    });

    // Snowflake effect
    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // between 5s and 10s
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // between 10px and 20px
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000); // Remove snowflake after 10s
    };

    setInterval(createSnowflake, 100); // Create a snowflake every 100ms
});