// ==========================================
// WELCOME SCREEN
// ==========================================

const welcomeScreen =
    document.getElementById("welcome-screen");

const enterButton =
    document.getElementById("enter-button");


// ==========================================
// ENTER THE GARDEN
// ==========================================

enterButton.addEventListener("click", () => {

    // Hide welcome screen
    welcomeScreen.classList.add("hide");

});

// ==========================================
// FLOWER GARDEN
// ==========================================

// Get the flower container
const flowerContainer = document.getElementById("flower-container");

// Get the flower number text
const flowerNumber = document.getElementById("flower-number");

// Total number of flowers
const totalFlowers = 5;

// Current flower
let currentFlower = 0;


// ==========================================
// DIFFERENT FLOWER COLORS
// ==========================================

const flowerColors = [
    ["#ff4d6d", "#ff8fab"],  // Pink
    ["#9b5de5", "#c77dff"],  // Purple
    ["#ff7b00", "#ffb703"],  // Orange
    ["#f72585", "#ff99c8"],  // Rose
    ["#00b4d8", "#90e0ef"]   // Blue
];


// ==========================================
// CREATE A NEW FLOWER
// ==========================================

function createFlower() {

    // Clear old flower
    flowerContainer.innerHTML = "";


    // Get colors for current flower
    const colors = flowerColors[currentFlower];


    // ==========================================
    // CREATE STEM
    // ==========================================

    const stem = document.createElement("div");

    stem.className = "stem";

    flowerContainer.appendChild(stem);


    // ==========================================
    // CREATE LEFT LEAF
    // ==========================================

    const leftLeaf = document.createElement("div");

    leftLeaf.className = "leaf leaf-left";

    flowerContainer.appendChild(leftLeaf);


    // ==========================================
    // CREATE RIGHT LEAF
    // ==========================================

    const rightLeaf = document.createElement("div");

    rightLeaf.className = "leaf leaf-right";

    flowerContainer.appendChild(rightLeaf);


    // ==========================================
    // CREATE FLOWER HEAD
    // ==========================================

    const flower = document.createElement("div");

    flower.className = "flower";


    // ==========================================
    // CREATE 6 PETALS
    // ==========================================

    for (let i = 0; i < 6; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        // Give each flower its own colors
        petal.style.background =
            `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;

        flower.appendChild(petal);
    }


    // ==========================================
    // CREATE FLOWER CENTER
    // ==========================================

    const center = document.createElement("div");

    center.className = "flower-center";

    flower.appendChild(center);


    // Add flower to container
    flowerContainer.appendChild(flower);


    // ==========================================
    // FLOWER CLICK / TAP EVENT
    // ==========================================

    flower.addEventListener("click", () => {

        // Prevent multiple clicks
        flower.style.pointerEvents = "none";


        // Create floating petals
createFloatingPetals(flower);

// Start disappearing animation
flower.classList.add("disappear");


        // Wait for disappearance animation
        setTimeout(() => {

            // Move to next flower
            currentFlower++;


            // Check if all 5 flowers are finished
            if (currentFlower < totalFlowers) {

                // Update counter
                flowerNumber.textContent =
                    currentFlower + 1;


                // Create next flower
                createFlower();

            } else {

                // All flowers completed
                // ==========================================
// CREATE FLOATING PETALS
// ==========================================

function createFloatingPetals(flower) {

    const colors = flowerColors[currentFlower];

    for (let i = 0; i < 12; i++) {

        const petal = document.createElement("div");

        petal.className = "floating-petal";

        // Random starting position
        petal.style.left =
            (flower.offsetLeft + 50) + "px";

        petal.style.top =
            (flower.offsetTop + 50) + "px";

        // Flower color
        petal.style.background =
            colors[Math.floor(Math.random() * 2)];

        // Random movement
        const randomX =
            (Math.random() * 300 - 150) + "px";

        const randomY =
            (Math.random() * 250 - 180) + "px";

        petal.style.setProperty(
            "--random-x",
            randomX
        );

        petal.style.setProperty(
            "--random-y",
            randomY
        );

        // Random animation delay
        petal.style.animationDelay =
            (Math.random() * 0.3) + "s";

        flowerContainer.appendChild(petal);

    }

}
                showFinalMessage();

            }

        }, 1000);

    });

}


// ==========================================
//