function playAudio() {
    var audio = document.getElementById('meowAudio');
    audio.play();
}

// Toggle chat window visibility
function toggleChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    chatWindow.classList.toggle('active');
}

// Generate random responses (meow, smiley emoji, etc.)
function getRandomResponse() {
    const responses = [
        "Meow meow!",
        "😊",
        "Purr purr!",
        "Meow! How can I help?",
        "🐾",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const messageText = input.value.trim();

    if (messageText) {
        // Create a new message element for the user
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');

        // Create a header for the user message
        const userHeader = document.createElement('div');
        userHeader.classList.add('message-header');
        userHeader.textContent = 'You'; // Header for user messages

        // Append header and message text to the user message
        userMessage.appendChild(userHeader);
        const userText = document.createElement('div');
        userText.classList.add('message-text');
        userText.textContent = messageText;
        userMessage.appendChild(userText);

        // Append the user message to the chat window
        const chatWindow = document.getElementById('chat-body');
        chatWindow.appendChild(userMessage);

        // Clear the input field
        input.value = '';

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Simulate a bot response after a short delay
        setTimeout(() => {
            const botResponses = [
                "Mikasa Ackerman is pawsitively strong! She's one of the fiercest fighters in the Survey Corps.",
                "She's fur-ever loyal! Her bond with Eren is tighter than my grip on a toy mouse.",
                "Ackerman power, hiss hiss! Her lineage gives her super-cat reflexes and strength, perfect for taking down Titans.",
                "Her red scarf is her catnip! Eren gave it to her, and she cherishes it fur-ever.",
                "Silent but deadly... like a stealthy cat, meow! Mikasa doesn’t talk much, but when she does, it’s clawsome.",
                "With a heart as fierce as a lion, Mikasa roars into battle, ready to protect her friends!",
                "Her skills are sharper than my claws! She slices through Titans like a hot knife through butter.",
                "Mikasa's determination is like a cat chasing a laser pointer—unstoppable and focused!",
                "When she fights, it's like watching a graceful cat dance—swift, agile, and mesmerizing.",
                "Her loyalty is as strong as a cat's love for its favorite toy—unbreakable and true!",
                "Mikasa's strength is legendary, just like the tales of mighty felines in folklore!",
                "In the world of Titans, she's the ultimate catnip—drawing everyone’s attention with her prowess!",
                "Like a cat with nine lives, Mikasa always finds a way to bounce back from danger!",
                "Her fierce spirit is like a lioness protecting her pride—noble and fierce!",
                "Mikasa's resolve is as solid as a cat's stare when it spots a bird—intense and unwavering!",
                "With every swing of her blade, she purrs with confidence, ready to take on any challenge!"
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');

            // Create a header for the bot message
            const botHeader = document.createElement('div');
            botHeader.classList.add('message-header');
            botHeader.textContent = 'Kitty'; // Header for bot messages

            // Append header and message text to the bot message
            botMessage.appendChild(botHeader);
            const botText = document.createElement('div');
            botText.classList.add('message-text');
            botText.textContent = randomResponse;
            botMessage.appendChild(botText);

            // Append the bot message to the chat window
            chatWindow.appendChild(botMessage);

            // Scroll to the bottom of the chat window
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000); // Bot response delay (1 second)
    }
}
