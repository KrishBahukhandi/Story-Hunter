document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    const story = [
        {
            text: "Finn had one rule for himself: make it through life with as little embarrassment as possible. But today, fate had other plans. He was preparing to present at his company’s big meeting when he realized—he’d accidentally grabbed his roommate’s bag instead of his own. As he opened it, his stomach dropped.",
            options: [
                { text: "Pretend nothing’s wrong and continue with the presentation.", next: 1 },
                { text: "Excuse yourself and attempt to switch the bags back.", next: 2 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/office_meeting.jpg'
        },
        {
            text: "Finn nervously shuffled through the random items in his roommate’s bag: neon socks, a squirt gun, and—oh no—a large, pink feather boa. Just as he tried to hide it, the squirt gun went off, spraying his boss, Ms. Thompson, right in the face.",
            options: [
                { text: "Apologize profusely and attempt to clean it up.", next: 3 },
                { text: "Blame it on a coworker and try to laugh it off.", next: 4 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/office_chaos.jpg'
        },
        {
            text: "Rushing back to switch the bags, Finn accidentally collided with the office janitor, spilling cleaning supplies everywhere. Slipping on the sudsy floor, he landed with a dramatic SPLAT, just as his boss came looking for him.",
            options: [
                { text: "Laugh off the fall and make a joke.", next: 5 },
                { text: "Stand up and try to explain, still dripping with soap.", next: 6 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/slip_and_fall.jpg'
        },
        {
            text: "Finn frantically tried to clean Ms. Thompson's glasses with his shirt, only to accidentally smear pink highlighter across the lens. Ms. Thompson looked unimpressed, but the rest of the room was stifling laughter.",
            options: [
                { text: "Hand her the pink boa as a peace offering.", next: 7 },
                { text: "Apologize and attempt to refocus the meeting.", next: 8 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/awkward_cleaning.jpg'
        },
        {
            text: "Pointing at his coworker Ted, Finn exclaimed, “It was Ted's idea!” Ted’s face flushed as the room erupted in laughter. Surprisingly, Ms. Thompson cracked a small smile, amused by the unexpected office humor.",
            options: [
                { text: "Try to turn the presentation into a comedy bit.", next: 9 },
                { text: "Quickly get back on track with the actual presentation.", next: 10 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/blame_game.jpg'
        },
        {
            text: "Finn managed to turn the slip into a joke: “I guess I’m just slipping into character!” The whole room burst out laughing, and Ms. Thompson shook her head, amused. It wasn’t the smoothest recovery, but Finn was gaining momentum.",
            options: [
                { text: "Continue with the meeting, keeping the light-hearted tone.", next: 11 },
                { text: "Attempt to wrap things up quickly before anything else happens.", next: 12 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/stand_up_joke.jpg'
        },
        {
            text: "Trying to explain, Finn only got more flustered as he tried to brush off the soap, leaving a sudsy trail on the carpet. His boss raised an eyebrow but gave him a chance to continue, clearly entertained by the fiasco.",
            options: [
                { text: "Push through the embarrassment and finish the meeting.", next: 13 },
                { text: "Excuse yourself, hoping to end the spectacle.", next: 14 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/embarrassed.jpg'
        },
        {
            text: "Finn offered Ms. Thompson the pink boa as a peace offering. She hesitated, then let out a genuine laugh, draping it around her neck. The room joined in, and suddenly, the tension melted away.",
            options: [
                { text: "Use this moment to transition into the presentation.", next: 15 },
                { text: "Thank everyone for the laugh and conclude the meeting on a high note.", next: 16 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/boa_laugh.jpg'
        },
        {
            text: "Refocusing the meeting, Finn managed to stumble through his points, but every time he tried to be serious, the boa or squirt gun got another laugh out of the room. By the end, the presentation was a hilarious success.",
            options: [
                { text: "Wrap up with a joke about the whole incident.", next: 17 },
                { text: "Thank everyone and leave with as much dignity as possible.", next: 18 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/presentation_success.jpg'
        },
        {
            text: "Finn decided to embrace the chaos and turn his presentation into a comedy act. Using the boa as a prop, he delivered each slide with an exaggerated flair, turning mundane data into a stand-up routine. He was a hit.",
            options: [
                { text: "End with a punchline about ‘not quitting your day job.’", next: 19 },
                { text: "Bow dramatically, and thank everyone for being good sports.", next: 20 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_7/standup_act.jpg'
        },
        {
            text: "Finally, the meeting was over, and Finn had survived by turning one of the most embarrassing moments of his life into a light-hearted, memorable experience. As everyone left, Ms. Thompson gave him a nod. He knew he wouldn’t live it down, but maybe that was okay.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_7/end_scene.jpg'
        },
        {
            text: "Wrapping up, Finn cracked a joke about how he ‘planned the entire mishap as a team-building exercise.’ The room erupted in laughter, and Ms. Thompson shook her head, clearly amused.",
            options: [],
            backgroundImage: '../../Assests/IMAGES/STORY_7/final_joke.jpg'
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
