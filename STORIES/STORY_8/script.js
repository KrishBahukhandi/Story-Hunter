document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    const story = [
        {
            text: "In a quiet, forgotten corner of the city stood a tiny, dusty bookstore. Alia stumbled upon it by chance on a stormy night, the glow of its lanterns barely visible through the rain. Curiosity got the best of her, and she pushed open the door. The sign above read: 'Timeless Tales.'",
            options: [
                { text: "Step inside and explore the shelves.", next: 1 },
                { text: "Turn around and leave, thinking it’s too eerie.", next: 2 }
            ],
            backgroundImage: 'old_bookstore.jpg'
        },
        {
            text: "Alia hesitated but then entered. Inside, the store was filled with rows of ancient, leather-bound books, each emanating a faint glow. She felt as though they were calling to her. One book, bound in gold, seemed to stand out the most.",
            options: [
                { text: "Reach for the gold-bound book.", next: 3 },
                { text: "Browse through some other shelves.", next: 4 }
            ],
            backgroundImage: 'glowing_books.jpg'
        },
        {
            text: "Feeling spooked, Alia turned back and left, but curiosity tugged at her. Days later, she couldn’t shake off the memory of the store. But when she returned, it was gone, leaving only the faint scent of old paper. THE END.",
            options: [],
            backgroundImage: 'mysterious_exit.jpg'
        },
        {
            text: "As Alia opened the gold-bound book, a bright light flooded the room, and the pages began to turn on their own. The world around her faded, and she found herself standing in a dense forest, with trees that stretched endlessly into the sky.",
            options: [
                { text: "Walk deeper into the forest.", next: 5 },
                { text: "Call out to see if anyone is there.", next: 6 }
            ],
            backgroundImage: 'enchanted_forest.jpg'
        },
        {
            text: "Browsing other shelves, Alia found a silver-bound book. She opened it, and suddenly, she was standing on a vast mountain peak, the wind whipping around her, as ancient warriors gathered below.",
            options: [
                { text: "Descend toward the warriors.", next: 7 },
                { text: "Close the book and try to go back.", next: 8 }
            ],
            backgroundImage: 'mountain_peak.jpg'
        },
        {
            text: "Alia walked deeper into the forest, feeling as though she was being watched. Suddenly, a wolf appeared in her path, its eyes glowing with wisdom. It spoke in a voice as old as time, 'Only those who seek wisdom may pass.'",
            options: [
                { text: "Ask the wolf for guidance.", next: 9 },
                { text: "Take a different path around the wolf.", next: 10 }
            ],
            backgroundImage: 'wolf_in_forest.jpg'
        },
        {
            text: "Alia called out, and a figure emerged from the trees—a woman draped in ancient robes, her face hidden in shadow. 'You are the first to visit in centuries,' the woman said, offering Alia a key. 'This will guide you to the truth you seek.'",
            options: [
                { text: "Take the key and follow the woman.", next: 11 },
                { text: "Refuse the key and look for another way out.", next: 12 }
            ],
            backgroundImage: 'mysterious_woman.jpg'
        },
        {
            text: "Alia descended the mountain and approached the warriors, who knelt before her. One of them handed her a scroll, whispering, 'You must carry this to the Valley of the Ages if you wish to return home.'",
            options: [
                { text: "Accept the scroll and journey to the valley.", next: 13 },
                { text: "Refuse the scroll and look for another path down the mountain.", next: 14 }
            ],
            backgroundImage: 'valley_of_ages.jpg'
        },
        {
            text: "Alia tried to close the book, but it resisted, almost as if it had a mind of its own. In a flash, she was back in the bookstore, but now the entire store was alive, filled with voices whispering stories of the past.",
            options: [
                { text: "Listen to the stories and let them guide you.", next: 15 },
                { text: "Run out of the store, feeling overwhelmed.", next: 16 }
            ],
            backgroundImage: 'living_bookstore.jpg'
        },
        {
            text: "The wolf guided Alia to a hidden path that led to a towering library in the heart of the forest. Inside, books floated in midair, each one containing a story waiting to be lived.",
            options: [
                { text: "Pick a floating book to read its story.", next: 17 },
                { text: "Leave the library and continue exploring.", next: 18 }
            ],
            backgroundImage: 'floating_library.jpg'
        },
        {
            text: "Choosing to walk around the wolf, Alia soon lost her way. The forest grew darker, and shadows stretched around her until she was surrounded by a wall of trees, trapping her. She realized the wolf had been a guardian. THE END.",
            options: [],
            backgroundImage: 'dark_forest.jpg'
        },
        {
            text: "The woman led Alia to a portal hidden in a tree. 'Step through, and you’ll find your way home,' she said. But Alia hesitated, wondering if there was more to discover in this mysterious realm.",
            options: [
                { text: "Step through the portal and return.", next: 19 },
                { text: "Stay behind and explore further.", next: 20 }
            ],
            backgroundImage: 'tree_portal.jpg'
        },
        {
            text: "Alia wandered through the woods but found only an endless path of shadows and whispers. Eventually, she stumbled upon the bookstore again, realizing she was trapped in a loop of 'Timeless Tales.' THE END.",
            options: [],
            backgroundImage: 'forest_loop.jpg'
        },
        {
            text: "Alia carried the scroll through valleys and mountains, encountering creatures from every legend she’d ever read. Finally, she arrived at a stone altar where she placed the scroll. In an instant, she was back in the bookstore.",
            options: [
                { text: "Reflect on the journey and leave.", next: 21 },
                { text: "Pick up another book and continue exploring.", next: 22 }
            ],
            backgroundImage: 'altar_of_legends.jpg'
        },
        {
            text: "Ignoring the mountain path, Alia wandered into uncharted territory. Eventually, she came upon a hidden village where stories were kept alive by a mysterious order of storytellers. She stayed to learn their ways. THE END.",
            options: [],
            backgroundImage: 'hidden_village.jpg'
        },
        {
            text: "Listening to the stories, Alia felt herself drawn into another tale—this time, a tale of ancient seas and forgotten treasures. She became part of 'Timeless Tales,' a living story that others might one day read.",
            options: [],
            backgroundImage: 'ancient_seas.jpg'
        },
        {
            text: "Alia fled the store, feeling overwhelmed. But as she turned the corner, the memory of the voices lingered, and she wondered if she’d missed the chance of a lifetime. THE END.",
            options: [],
            backgroundImage: 'running_away.jpg'
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
