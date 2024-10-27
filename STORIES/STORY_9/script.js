document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    const story = [
        {
            text: "You stand at the edge of the Evertree Forest, the sun dipping low behind you. Legends say ancient magic lies hidden here, and only the bravest souls venture in. Your heart races as you take your first step into the towering trees.",
            options: [
                { text: "Head deeper into the forest, towards the whispering trees.", next: 1 },
                { text: "Follow a faint path along a stream running through the trees.", next: 2 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/forest_entrance.jpg'
        },
        {
            text: "You walk deeper into the forest, where the trees grow denser. A strange, shimmering fog rolls in, swirling with hints of color and shape. As you step forward, you hear a soft, ethereal voice calling your name.",
            options: [
                { text: "Follow the voice further into the mist.", next: 3 },
                { text: "Ignore the voice and continue along the path.", next: 4 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/misty_forest.jpg'
        },
        {
            text: "Following the stream, you come to a clearing where a grand, ancient tree stands. Its roots curl like snakes, and in its bark is a doorway leading into darkness. A carved sign reads, 'Only the worthy may enter.",
            options: [
                { text: "Enter the tree door, seeking the mysteries within.", next: 5 },
                { text: "Walk around the clearing to investigate the area first.", next: 6 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/ancient_tree.jpg'
        },
        {
            text: "The voice leads you to a glade bathed in moonlight, where a spectral figure appears—a guardian spirit of the forest. It looks at you with piercing eyes, testing your courage.",
            options: [
                { text: "Pledge your loyalty to the forest and its guardians.", next: 7 },
                { text: "Challenge the spirit to test your own strength.", next: 8 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/forest_spirit.jpg'
        },
        {
            text: "You resist the voice and press forward, but the forest seems to resist you. Vines grow thicker, blocking your way, and the path becomes tangled. Suddenly, a glint of silver catches your eye—it’s a strange amulet hanging from a tree branch.",
            options: [
                { text: "Take the amulet and wear it.", next: 9 },
                { text: "Ignore the amulet and push through the vines.", next: 10 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/amulet.jpg'
        },
        {
            text: "Inside the tree, you find yourself in a dimly lit tunnel with symbols etched into the walls, glowing faintly. The air hums with magic, and you feel your strength growing.",
            options: [
                { text: "Follow the tunnel deeper underground.", next: 11 },
                { text: "Exit back to the clearing before it's too late.", next: 6 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/tree_tunnel.jpg'
        },
        {
            text: "As you explore the clearing, you notice symbols carved into nearby rocks, revealing a map of the forest paths. One path seems to lead to a hidden valley marked 'Sanctuary.'",
            options: [
                { text: "Follow the map to the hidden valley.", next: 12 },
                { text: "Return to the tree door and enter.", next: 5 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/rock_map.jpg'
        },
        {
            text: "The guardian spirit bows to you, and a small silver key appears in your hand. 'Use this when you face the heart of the forest,' it says before disappearing. The key glows faintly, imbued with protective magic.",
            options: [
                { text: "Continue deeper into the forest.", next: 13 },
                { text: "Return to the forest entrance with the key.", next: 14 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/silver_key.jpg'
        },
        {
            text: "The spirit accepts your challenge, and a battle ensues. You fight bravely, but in the end, you are overpowered. The spirit, impressed by your courage, grants you a mystical shield.",
            options: [
                { text: "Thank the spirit and continue on your journey.", next: 13 },
                { text: "Return to the forest entrance with the shield.", next: 14 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/mystic_shield.jpg'
        },
        {
            text: "The amulet seems to grant you strength, and you manage to push through the vines. However, you soon find yourself at the edge of a massive cliff overlooking a shimmering lake.",
            options: [
                { text: "Climb down to the lake to explore.", next: 15 },
                { text: "Follow the cliff edge to see where it leads.", next: 16 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/cliff_lake.jpg'
        },
        {
            text: "You push through the vines, determined. Eventually, you stumble upon a hidden village filled with people who seem to know you. They bow and call you 'the chosen one,' destined to restore the balance of the forest.",
            options: [
                { text: "Accept the villagers' call to aid their mission.", next: 17 },
                { text: "Decline and continue on your journey alone.", next: 18 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/hidden_village.jpg'
        },
        {
            text: "The tunnel opens into a cavern with an underground waterfall cascading into a crystal-clear pool. The glow from the walls illuminates a pedestal holding a mysterious artifact.",
            options: [
                { text: "Take the artifact and examine it closely.", next: 19 },
                { text: "Leave the artifact and continue exploring the cavern.", next: 20 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/underground_cavern.jpg'
        },
        {
            text: "Following the map, you reach a secluded valley with lush greenery and sparkling streams. The valley feels like a place of refuge, and you feel a sense of peace.",
            options: [
                { text: "Rest in the valley and take in its tranquility.", next: 21 },
                { text: "Continue exploring to uncover more secrets.", next: 22 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/hidden_valley.jpg'
        },
        {
            text: "Armed with the key and shield, you arrive at the heart of the forest where a powerful creature guards an ancient relic. The guardian awakens and challenges you.",
            options: [
                { text: "Use the key and shield to confront the guardian.", next: 23 },
                { text: "Try to negotiate with the guardian for safe passage.", next: 24 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/forest_heart.jpg'
        },
        {
            text: "You decide to return to the forest entrance, feeling wiser and stronger. As you leave, you know you will one day return to complete your adventure. THE END.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_2/forest_exit.jpg' // End
        },
        {
            text: "Climbing down to the lake, you discover ancient runes along its edge that seem to hold a powerful secret of the forest's past.",
            options: [
                { text: "Study the runes to uncover their meaning.", next: 25 },
                { text: "Leave the lake and continue exploring.", next: 16 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/lake_runes.jpg'
        },
        {
            text: "Following the cliff edge, you find a bridge leading to a mysterious island with a strange aura. Only those who are truly brave may cross.",
            options: [
                { text: "Cross the bridge to the island.", next: 26 },
                { text: "Turn back to explore other parts of the forest.", next: 4 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/mysterious_island.jpg'
        },
        {
            text: "The villagers give you a blessed amulet and a map, urging you to complete your journey. They believe you can restore peace to the land.",
            options: [
                { text: "Take the villagers’ blessings and move forward.", next: 27 },
                { text: "Leave the village and follow your own path.", next: 18 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_2/village_blessing.jpg'
        }
    ];
    

    let currentStep = 0;
    let previousSteps = [];

    // Function to display the current story step
    function showStep(step) {
        const currentStory = story[step];
        storyTextElement.textContent = currentStory.text;
        backgroundImageElement.style.backgroundImage = `url(${currentStory.backgroundImage})`;

        if (currentStory.options.length > 0) {
            optionsContainer.style.display = 'block';
            option1Button.textContent = currentStory.options[0].text;
            option2Button.textContent = currentStory.options[1].text;
        } else {
            optionsContainer.style.display = 'none';
        }
    }

    // Event listeners for options
    option1Button.addEventListener('click', () => {
        previousSteps.push(currentStep);
        currentStep = story[currentStep].options[0].next;
        showStep(currentStep);
    });

    option2Button.addEventListener('click', () => {
        previousSteps.push(currentStep);
        currentStep = story[currentStep].options[1].next;
        showStep(currentStep);
    });

    // Back button event listener
    backButton.addEventListener('click', () => {
        if (previousSteps.length > 0) {
            currentStep = previousSteps.pop();
            showStep(currentStep);
        }
    });

    // Initialize story
    showStep(currentStep);
});

// Fade-out and navigation function
function goBack() {
    document.body.classList.add('fade-out'); // Add fade-out effect class
    setTimeout(() => {
        window.location.href = "../../LANDING PAGE/index.html"; // Replace with the previous page's URL
    }, 500); // Adjust timing to match fade-out duration
}

// Back button event listener with fade effect
backButton.addEventListener('click', goBack);
