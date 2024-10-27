document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.getElementById('storyText');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const backgroundImageElement = document.getElementById('backgroundImage'); // Using ID for the background
    const optionsContainer = document.querySelector('.options');
    const backButton = document.getElementById('backButton');

    const story = [
        {
            text: "The ship creaks as it slices through uncharted waters, the distant horizon cloaked in mist. You’ve spent years searching for this place, following cryptic maps and whispered tales of a forgotten land. The crew looks to you with hope, but also fear. The unknown awaits, and you are their guide.",
            options: [
                { text: "Press forward through the mist, determined to uncover the mysteries.", next: 1 },
                { text: "Drop anchor and survey the area before proceeding.", next: 2 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/misty_sea.jpg'
        },
        {
            text: "Pushing through the mist, you catch a glimpse of land—the lost island you’ve been searching for. Dense jungles cover the hills, and a river glitters under the sunlight, snaking deep into the heart of the land. The air feels charged, like the island itself is alive and watching.",
            options: [
                { text: "Disembark with your crew and head toward the jungle.", next: 3 },
                { text: "Scout the shoreline for signs of danger or civilization.", next: 4 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/island_jungle.jpg'
        },
        {
            text: "You anchor the ship and survey the area with binoculars. The fog lifts slightly, revealing glimpses of ancient stone structures on the shore, covered in vines. No signs of life—but something about the structures feels ominous.",
            options: [
                { text: "Venture onto the shore with a few trusted crew members.", next: 5 },
                { text: "Wait until nightfall, observing for any movement.", next: 6 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/stone_ruins.jpg'
        },
        {
            text: "The jungle is dense and humid, with vines hanging like webs. The sounds of distant creatures echo around you. You press onward, leading your crew through tangled foliage, when suddenly, a stone idol appears before you—covered in strange markings.",
            options: [
                { text: "Examine the idol closely, looking for clues.", next: 7 },
                { text: "Ignore the idol and continue deeper into the jungle.", next: 8 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/jungle_idol.jpg'
        },
        {
            text: "As you scout the shoreline, you find strange tracks in the sand, unlike any animal you’ve seen. They lead into the jungle and disappear among the trees, as if someone—or something—wanted to stay hidden.",
            options: [
                { text: "Follow the tracks cautiously.", next: 9 },
                { text: "Return to the ship, feeling a sense of foreboding.", next: 10 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/shore_tracks.jpg'
        },
        {
            text: "Venturing ashore, you lead your crew towards the stone structures. Ancient statues line the path, their faces eroded but still haunting. The air is thick with silence, and you can’t shake the feeling of being watched.",
            options: [
                { text: "Continue along the path towards the largest structure.", next: 11 },
                { text: "Investigate a smaller, overgrown structure on the left.", next: 12 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/ancient_statues.jpg'
        },
        {
            text: "As night falls, shadows stretch over the ruins, and an eerie silence settles. Suddenly, faint lights flicker in the jungle, moving closer. You strain to listen, hearing footsteps just beyond the treeline.",
            options: [
                { text: "Call out, hoping to make contact with whoever is approaching.", next: 13 },
                { text: "Stay silent and hide, observing from the shadows.", next: 14 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/night_ruins.jpg'
        },
        {
            text: "The markings on the idol seem ancient, but you recognize some symbols from your research. They speak of a treasure hidden deep in the island, guarded by an ancient curse. Your heart races with both fear and excitement.",
            options: [
                { text: "Take a rubbing of the symbols for later reference.", next: 15 },
                { text: "Ignore the symbols and press on, determined to find the treasure.", next: 8 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/idol_markings.jpg'
        },
        {
            text: "You continue deeper into the jungle, leaving the idol behind. The path grows darker and the sounds of the jungle seem to close in around you. Suddenly, you come upon a ravine, with an ancient bridge barely hanging over it.",
            options: [
                { text: "Attempt to cross the bridge, despite its rickety condition.", next: 16 },
                { text: "Search for another path around the ravine.", next: 17 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/jungle_bridge.jpg'
        },
        {
            text: "Following the tracks, you eventually reach a hidden clearing. A stone circle lies in the center, its surface carved with more of the strange symbols. The air feels charged with energy, and you realize this might be a place of ritual.",
            options: [
                { text: "Step into the circle, trying to uncover its secrets.", next: 18 },
                { text: "Back away slowly, sensing danger.", next: 6 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/stone_circle.jpg'
        },
        {
            text: "Back on the ship, a sudden storm approaches. Lightning crackles overhead, illuminating the island in harsh flashes. The crew scrambles to secure the ship, but you feel the pull to return to shore—to find the answers you came for.",
            options: [
                { text: "Head back to shore despite the storm.", next: 19 },
                { text: "Stay on the ship, waiting for the storm to pass.", next: 20 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/storm.jpg'
        },
        {
            text: "You approach the large structure, which towers above the jungle. It seems like a temple or ancient palace, its entrance obscured by overgrown vines. You pull them aside, revealing a dark passage within.",
            options: [
                { text: "Enter the passage, torch in hand.", next: 21 },
                { text: "Send a crew member ahead to scout the passage.", next: 22 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/temple_entrance.jpg'
        },
        {
            text: "The smaller structure is covered in vines and moss, but it holds an air of mystery. Inside, you find ancient tools and relics, as well as a faded map etched into the stone wall.",
            options: [
                { text: "Study the map for clues to the treasure’s location.", next: 23 },
                { text: "Take the relics and return to the main path.", next: 8 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/hidden_relics.jpg'
        },
        {
            text: "Calling out, you hear a voice answer—it's rough and unfamiliar. A group of figures emerge from the jungle shadows. They’re not hostile, but their gaze is cold. They are the island’s protectors, warning you of the dangers that lie ahead.",
            options: [
                { text: "Attempt to negotiate and seek their guidance.", next: 24 },
                { text: "Thank them and proceed on your own.", next: 8 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/island_protectors.jpg'
        },
        {
            text: "You hide, watching as figures in dark cloaks move around the ruins. They chant softly, performing a ritual that you don’t understand. The island’s protectors—they are guarding something precious here.",
            options: [
                { text: "Emerge and confront them, seeking answers.", next: 25 },
                { text: "Stay hidden, hoping to learn more.", next: 18 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/chanting_protectors.jpg'
        },
        {
            text: "With the symbols now preserved, you feel ready to continue. The jungle feels darker, more foreboding, but you press on with new resolve, hoping to unlock the island’s secrets.",
            options: [
                { text: "Head toward the temple at the heart of the island.", next: 11 },
                { text: "Return to the shore, sensing that danger is closing in.", next: 10 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/jungle_night.jpg'
        },
        {
            text: "Taking a deep breath, you step onto the ancient bridge. Each step creaks underfoot, and halfway across, you hear the wood splintering. Holding your breath, you make it to the other side just as the bridge collapses behind you.",
            options: [
                { text: "Continue forward, heart pounding with adrenaline.", next: 18 },
                { text: "Look back, realizing there’s no way back now.", next: 26 }
            ],
            backgroundImage: '../../Assests/IMAGES/STORY_6/crossing_bridge.jpg'
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
