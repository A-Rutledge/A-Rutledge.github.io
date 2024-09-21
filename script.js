// Get references to the form, textarea, and feedback div
const logForm = document.getElementById('log-form');
const gameLinksTextarea = document.getElementById('game-links');
const feedbackDiv = document.getElementById('feedback');

logForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)

    // Get the game links from the textarea and parse them as a JavaScript array
    const gameLinksText = gameLinksTextarea.value;
    
    try {
        const gameLinks = JSON.parse(gameLinksText);

        // Display feedback to the user 
        feedbackDiv.textContent = 'Parsing in progress...';

        // Simulate parsing process with a timeout (replace with actual API call)
        setTimeout(() => {
            feedbackDiv.textContent = `Parsed ${gameLinks.length} logs successfully!`; 
        }, 3000); // Simulate a 3-second delay

    } catch (error) {
        // Handle invalid input format
        feedbackDiv.textContent = 'Invalid input format. Please provide a valid JavaScript array of links.';
    }
});