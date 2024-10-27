document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    const story = [
        {
            text: "You've heard the stories about Blackwood Manor. The deaths, the disappearances, the curse. But you came anyway. As you step through the gates, a chill runs down your spine. Something in the air feels wrong.",
            options: [
                { text: "Enter the manor through the front door.", next: 1 },
                { text: "Search around the garden before going in.", next: 2 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/dark_house.jpg'
        },
        {
            text: "The moment you step inside, the temperature drops. You can almost feel eyes on you from the dark corners of the room. There’s something unnatural here.",
            options: [
                { text: "Investigate the sounds coming from upstairs.", next: 3 },
                { text: "Head toward the old library on the left.", next: 4 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/choice_1.jpg'
        },
        {
            text: "You decide to explore the garden first. Strange statues and twisted trees surround you, and something about them feels alive. Then, you notice a faint light coming from the other side of the garden.",
            options: [
                { text: "Follow the light deeper into the garden.", next: 5 },
                { text: "Ignore the light and return to the manor’s front door.", next: 1 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/garden.jpg'
        },
        {
            text: "The staircase creaks underfoot as you ascend. The sounds grow louder, leading you to a locked door at the end of the hall. As you listen closely, you hear whispers calling your name from behind the door.",
            options: [
                { text: "Try to open the door.", next: 6 },
                { text: "Retreat back downstairs.", next: 7 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/upstairs.jpg'
        },
        {
            text: "The library is dimly lit and filled with rows of dusty, ancient books. You spot a book lying open on a desk with strange symbols and sketches of dark creatures.",
            options: [
                { text: "Read the book.", next: 8 },
                { text: "Leave the library immediately.", next: 7 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/library.jpg'
        },
        {
            text: "You follow the light deeper into the garden and find an old, crumbling well. Peering inside, you see a faint glow emanating from its depths.",
            options: [
                { text: "Climb down into the well.", next: 9 },
                { text: "Back away and return to the manor.", next: 1 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/well.jpg'
        },
        {
            text: "The door opens, revealing a room with an old mirror covered in dust. As you look at it, your reflection seems to smile back at you—a smile that isn’t yours.",
            options: [
                { text: "Touch the mirror.", next: 10 },
                { text: "Quickly leave the room and close the door.", next: 7 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/mirror_room.jpg'
        },
        {
            text: "You decide to return downstairs. The eerie silence fills the air, making you question every step. You have an unsettling feeling, as if something—or someone—is watching.",
            options: [
                { text: "Exit the manor and leave.", next: 11 },
                { text: "Continue exploring the manor.", next: 1 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/exit.jpg'
        },
        {
            text: "As you read the book, you feel a sudden heaviness. The words seem to come to life, swirling off the page. You feel a force pulling you into the book itself, where darkness surrounds you.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_1/darkness.jpg' // End
        },
        {
            text: "You climb down into the well and find an ancient relic glowing with eerie light. Suddenly, the well starts to collapse, and you struggle to climb back up.",
            options: [
                { text: "Hold onto the relic and keep climbing.", next: 12 },
                { text: "Drop the relic and climb faster.", next: 13 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_1/well_depths.jpg'
        },
        {
            text: "As you touch the mirror, a chill overtakes you, and suddenly, everything around you changes. You find yourself trapped inside the mirror, looking out at your own body—controlled by something else. THE END.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_1/trapped_in_mirror.jpg' // End
        },
        {
            text: "You walk back through the manor’s gates and feel a sense of relief as you leave Blackwood Manor behind. You decide some mysteries are best left unsolved. THE END.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_1/exit.jpg' // End
        },
        {
            text: "You manage to climb out of the well, but the relic is still with you. As you hold it, a dark shadow follows you wherever you go, a constant reminder of the curse you brought back from Blackwood Manor. THE END.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_1/curse.jpg' // End
        },
        {
            text: "You drop the relic and climb out of the well just in time as it collapses. Back in the garden, you realize you narrowly escaped a dark fate. You leave Blackwood Manor, grateful to be alive. THE END.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_1/escape.jpg' // End
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
