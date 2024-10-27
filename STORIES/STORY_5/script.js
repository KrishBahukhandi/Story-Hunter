document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    const story = [
        {
            text: "You stand at the edge of the old stone bridge, looking out over the river that you both loved. The memories here are almost too heavy to bear. The way the sun sparkled on the water, the laughter you shared—now only echoes remain. It's been a year since they left, and yet it feels like yesterday.",
            options: [
                { text: "Sit by the river and remember the good times.", next: 1 },
                { text: "Walk along the riverbank, seeking solace in movement.", next: 2 }
            ],
            backgroundImage: 'river_bridge.jpg'
        },
        {
            text: "You sit by the water, the place where you both used to spend lazy afternoons. You remember their smile, their laughter echoing with the sound of the flowing river. Your heart aches with the emptiness they left behind.",
            options: [
                { text: "Stay a little longer, letting the memories come.", next: 3 },
                { text: "Leave the river and walk towards the town where you both lived.", next: 4 }
            ],
            backgroundImage: 'river_bank.jpg'
        },
        {
            text: "You walk along the riverbank, kicking stones as you go. The familiar path seems haunted with memories at every turn. You reach a spot where the two of you carved your initials into a tree, a small promise of forever etched in the bark.",
            options: [
                { text: "Trace the carved initials with your fingers.", next: 5 },
                { text: "Turn away, unable to face the memories here.", next: 6 }
            ],
            backgroundImage: 'initials_tree.jpg'
        },
        {
            text: "As you sit by the river, memories flood in. The sound of their voice, the way their eyes lit up when they laughed, the gentle touch of their hand in yours—it feels so real. But when you reach out, there's only empty air.",
            options: [
                { text: "Let the tears fall, allowing yourself to grieve.", next: 7 },
                { text: "Rise and head back toward the town, seeking distraction.", next: 8 }
            ],
            backgroundImage: 'memory_flood.jpg'
        },
        {
            text: "The town looks almost unchanged, yet everything feels different. You pass the café where you used to spend hours together, talking about everything and nothing. It feels like an eternity since you were last there.",
            options: [
                { text: "Enter the café, hoping for some comfort.", next: 9 },
                { text: "Continue walking, avoiding the memories that await inside.", next: 10 }
            ],
            backgroundImage: 'town_cafe.jpg'
        },
        {
            text: "You trace the initials, feeling the rough bark under your fingertips. A tear slips down your cheek as you remember the day you carved it together, a promise to always be there for each other. That promise now feels painfully distant.",
            options: [
                { text: "Close your eyes and relive that day in your mind.", next: 11 },
                { text: "Walk away, feeling the weight of loss.", next: 12 }
            ],
            backgroundImage: 'carved_tree.jpg'
        },
        {
            text: "You turn away from the tree, leaving the memories behind. But as you walk, you feel the emptiness closing in. Every step seems heavier, every memory a reminder of what’s gone.",
            options: [
                { text: "Sit down and let the sadness wash over you.", next: 13 },
                { text: "Continue walking, feeling a need to keep moving.", next: 8 }
            ],
            backgroundImage: 'heavy_heart.jpg'
        },
        {
            text: "You let the tears fall freely, and for the first time, the weight seems to lift just a little. As you cry, the memories feel like they’re slipping further away, yet somehow closer to peace.",
            options: [
                { text: "Take a deep breath and stand up.", next: 8 },
                { text: "Stay, allowing the grief to finally take its full hold.", next: 14 }
            ],
            backgroundImage: 'grieving.jpg'
        },
        {
            text: "You reach the end of the path, staring at the road leading out of town. The memories feel like they’re all around you. You know leaving might bring some distance, but are you ready to say goodbye?",
            options: [
                { text: "Take one last look before leaving the town for good.", next: 15 },
                { text: "Turn back, deciding you're not ready to leave yet.", next: 4 }
            ],
            backgroundImage: 'leaving_town.jpg'
        },
        {
            text: "Inside the café, everything feels familiar yet foreign. You order their favorite drink and sit by the window, letting the silence fill the space between you and the past. You feel as if they’re sitting across from you, just out of reach.",
            options: [
                { text: "Whisper a goodbye, hoping they can hear it.", next: 16 },
                { text: "Leave the café, feeling the ache of absence.", next: 8 }
            ],
            backgroundImage: 'empty_cafe.jpg'
        },
        {
            text: "As you walk through the familiar streets, memories surround you like a fog. You realize that while they may be gone, the impact they had on you remains, and in a way, they’re always with you.",
            options: [
                { text: "Close your eyes and thank them for everything.", next: 17 },
                { text: "Smile faintly, embracing the bittersweet memories.", next: 18 }
            ],
            backgroundImage: 'familiar_streets.jpg'
        },
        {
            text: "Reliving the day feels both comforting and heartbreaking. You remember their laugh, the way they promised they'd never leave. But some promises aren't meant to be kept forever.",
            options: [
                { text: "Savor the memory, letting it live in your heart.", next: 18 },
                { text: "Walk away, deciding it's time to move forward.", next: 19 }
            ],
            backgroundImage: 'memory_fade.jpg'
        },
        {
            text: "With each step away from the tree, you feel like you’re leaving a piece of yourself behind. Yet, you know you carry those memories with you no matter how far you go.",
            options: [
                { text: "Turn back for one last look.", next: 6 },
                { text: "Keep walking, letting the memories fade gently.", next: 8 }
            ],
            backgroundImage: 'walking_away.jpg'
        },
        {
            text: "You sit down, the weight of loss settling over you like a heavy fog. For a while, you simply exist in that moment, letting yourself feel the depth of your sorrow.",
            options: [
                { text: "After a while, you decide to rise and walk forward.", next: 8 },
                { text: "Stay longer, letting the stillness comfort you.", next: 14 }
            ],
            backgroundImage: 'sitting_sorrow.jpg'
        },
        {
            text: "You feel a bittersweet peace come over you, like the end of a chapter. As you walk away, the memories feel lighter, but still there, like a quiet whisper.",
            options: [
                { text: "Let the memories live on in your heart.", next: 18 },
                { text: "Hold on to the ache, keeping them close.", next: 17 }
            ],
            backgroundImage: 'bittersweet_peace.jpg'
        },
        {
            text: "Whispering goodbye, you feel as if they’re listening. There’s a sense of finality as you stand to leave, a farewell echoing softly in the empty space where they once were.",
            options: [
                { text: "Walk out of the café, feeling a strange sense of peace.", next: 8 },
                { text: "Look back one last time, holding onto their memory.", next: 14 }
            ],
            backgroundImage: 'whisper_goodbye.jpg'
        },
        {
            text: "You feel a strange peace wash over you, like they’re still with you, watching over you somehow. The sorrow remains, but so does the love that you shared.",
            options: [
                { text: "Smile, carrying the memory with you forever.", next: 18 },
                { text: "Let the love guide you forward, never forgetting.", next: 8 }
            ],
            backgroundImage: 'moving_forward.jpg'
        },
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
        window.location.href = "../../DISCOVER PAGE/index.html"; // Replace with the previous page's URL
    }, 500); // Adjust timing to match fade-out duration
}

// Back button event listener with fade effect
backButton.addEventListener('click', goBack);
