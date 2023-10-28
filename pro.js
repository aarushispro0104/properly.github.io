// Constants
const gameContainer = document.getElementById("game-container");
const player = document.getElementById("player");
const gameWidth = gameContainer.clientWidth;
const gameHeight = gameContainer.clientHeight;

// Player position
let playerX = gameWidth / 2;
player.style.left = playerX + "px";

// Shooting mechanism (you can use event listeners)
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        // Fire a bullet
        fireBullet();
    }
});

// Function to fire a bullet
function fireBullet() {
    // Create a bullet element and move it up
    const bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.left = playerX + "px";
    gameContainer.appendChild(bullet);

    // Animation to move the bullet up
    const bulletSpeed = 5;
    const bulletInterval = setInterval(() => {
        const bulletY = bullet.offsetTop;
        if (bulletY > 0) {
            bullet.style.top = bulletY - bulletSpeed + "px";
        } else {
            // Bullet is off the screen, remove it
            gameContainer.removeChild(bullet);
            clearInterval(bulletInterval);
        }
    }, 20);
}
