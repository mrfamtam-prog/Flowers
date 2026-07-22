// ==========================================
// WELCOME SCREEN
// ==========================================

const welcomeScreen = document.getElementById("welcome-screen");
const enterButton = document.getElementById("enter-button");

// ==========================================
// FLOWER GARDEN SETUP
// ==========================================

const flowerContainer = document.getElementById("flower-container");
const flowerNumber = document.getElementById("flower-number");

const totalFlowers = 5;
let currentFlower = 0;

// ==========================================
// FLOWER COLORS
// ==========================================

const flowerColors = [
    ["#ff4d6d", "#ff8fab"],  // Pink
    ["#9b5de5", "#c77dff"],  // Purple
    ["#ff7b00", "#ffb703"],  // Orange
    ["#f72585", "#ff99c8"],  // Rose
    ["#00b4d8", "#90e0ef"]   // Blue
];

// ==========================================
// ENTER THE GARDEN BUTTON
// ==========================================

enterButton.addEventListener("click", () => {
    // Hide welcome screen
    welcomeScreen.classList.add("hide");
    
    // Start generating the first flower!
    createFlower();
});

// ==========================================
// CREATE FLOATING PETALS (Moved to global scope)
// ==========================================

function createFloatingPetals(flower) {
    const colors = flowerColors[currentFlower];

    for (let i = 0; i < 12; i++) {
        const petal = document.createElement("div");
        petal.className = "floating-petal";

        // Random starting position
        petal.style.left = (flower.offsetLeft + 50) + "px";
        petal.style.top = (flower.offsetTop + 50) + "px";

        // Flower color
        petal.style.background = colors[Math.floor(Math.random() * 2)];

        // Random movement
        const randomX = (Math.random() * 300 - 150) + "px";
        const randomY = (Math.random() * 250 - 180) + "px";

        petal.style.setProperty("--random-x", randomX);
        petal.style.setProperty("--random-y", randomY);

        // Random animation delay
        petal.style.animationDelay = (Math.random() * 0.3) + "s";

        flowerContainer.appendChild(petal);
    }
}

// ==========================================
// FINAL MESSAGE (Added missing function)
// ==========================================

function showFinalMessage() {
    flowerContainer.innerHTML = "<h2 style='color: white;'>🎉 You bloomed all the flowers! 🎉</h2>";
}

// ==========================================
// CREATE A NEW FLOWER
// ==========================================

function createFlower() {
    // Clear old flower
    flowerContainer.innerHTML = "";

    // Get colors for current flower
    const colors = flowerColors[currentFlower];

    // Stem
    const stem = document.createElement("div");
    stem.className = "stem";
    flowerContainer.appendChild(stem);

    // Left Leaf
    const leftLeaf = document.createElement("div");
    leftLeaf.className = "leaf leaf-left";
    flowerContainer.appendChild(leftLeaf);

    // Right Leaf
    const rightLeaf = document.createElement("div");
    rightLeaf.className = "leaf leaf-right";
    flowerContainer.appendChild(rightLeaf);

    // Flower Head
    const flower = document.createElement("div");
    flower.className = "flower";

    // 6 Petals
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
        flower.appendChild(petal);
    }

    // Flower Center
    const center = document.createElement("div");
    center.className = "flower-center";
    flower.appendChild(center);

    flowerContainer.appendChild(flower);

    // FLOWER CLICK / TAP EVENT
    flower.addEventListener("click", () => {
        // Prevent multiple clicks
        flower.style.pointerEvents = "none";

        // Create floating petals
        createFloatingPetals(flower);

        // Start disappearing animation
        flower.classList.add("disappear");

        // Wait for disappearance animation
        setTimeout(() => {
            currentFlower++;

            if (currentFlower < totalFlowers) {
                flowerNumber.textContent = currentFlower + 1;
                createFlower();
            } else {
                showFinalMessage();
            }
        }, 1000);
    });
}