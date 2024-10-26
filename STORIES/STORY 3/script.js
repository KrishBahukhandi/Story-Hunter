document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    // Story data
    const story = [
        {
            text: "You've heard the stories about Blackwood Manor. The deaths, the disappearances, the curse. But you came anyway. As you step through the gates, a chill runs down your spine. Something in the air feels wrong.",
            options: [
                { text: "Enter the manor through the front door.", next: 1 },
                { text: "Search around the garden before going in.", next: 2 }
            ],
            backgroundImage: 'PATH_1A.jpg'
        },
        {
            text: "The moment you step inside, the temperature drops. You can almost feel eyes on you from the dark corners of the room. There’s something unnatural here.",
            options: [
                { text: "Investigate the sounds coming from upstairs.", next: 3 },
                { text: "Head toward the old library on the left.", next: 4 }
            ],
            backgroundImage: '../assets/images/horror_story/library.jpg'
        },
        {
            text: "You decide to leave the forest. The adventure ends here. THE END",
            options: [],
            backgroundImage: '../assets/images/horror_story/exit.jpg'
        },
        {
            text: "The path leads to a clearing with a mysterious house. THE END",
            options: [],
            backgroundImage: '../assets/images/horror_story/house.jpg'
        },
        {
            text: "You wait, but nothing happens. THE END",
            options: [],
            backgroundImage: '../assets/images/horror_story/nothing.jpg'
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