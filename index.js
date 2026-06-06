/* ==========================================================================
   PILLARA WEBPAGE INTERACTIVITY & APP SIMULATOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Simulator Tab Toggle Logic
       ========================================== */
    const tabToggles = document.querySelectorAll('.tab-toggle');
    const appScreens = document.querySelectorAll('.app-screen');
    const simulatorNotes = document.querySelectorAll('.simulator-note');

    tabToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetTab = toggle.getAttribute('data-tab');

            // Toggle active state on buttons
            tabToggles.forEach(t => t.classList.remove('active'));
            toggle.classList.add('active');

            // Toggle active screen inside the phone
            appScreens.forEach(screen => {
                if (screen.id === `screen-${targetTab}`) {
                    screen.classList.add('active');
                } else {
                    screen.classList.remove('active');
                }
            });

            // Toggle active explanation note
            simulatorNotes.forEach(note => {
                if (note.id === `note-${targetTab}`) {
                    note.classList.add('active');
                } else {
                    note.classList.remove('active');
                }
            });
        });
    });

    /* ==========================================
       2. AI Chat Companion Simulator
       ========================================== */
    const chatMessagesContainer = document.getElementById('chat-messages-container');
    const chatInputField = document.getElementById('chat-input-field');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');

    // Preset responses mapped to suggestion questions
    const responses = {
        "can i take atorvastatin with grapefruit?": "It is best to avoid eating grapefruit or drinking grapefruit juice while taking Atorvastatin. Grapefruit contains compounds that interfere with the breakdown of the medicine, raising its level in your blood. This can increase the risk of side effects like muscle damage. Feel free to enjoy oranges or apples instead!",
        "how do i take metformin safely?": "Metformin should always be taken with meals (usually breakfast or dinner) to help minimize common side effects like an upset stomach. Be sure to swallow the tablet whole with water. Taking it at the exact same times daily is a great habit! Let me know if you'd like to set up a reminder for your meals.",
        "why is it important to finish my antibiotic course?": "Finishing your full course of antibiotics is critical, even if you feel completely cured after 2 or 3 days. Stopping early can allow the strongest, most resilient bacteria to survive, multiply, and become resistant to that antibiotic. Let's finish strong together!"
    };

    // Helper to append message bubble to chat window
    function appendMessage(text, isOutgoing) {
        const bubble = document.createElement('div');
        bubble.classList.add('message');
        bubble.classList.add(isOutgoing ? 'outgoing' : 'incoming');
        bubble.textContent = text;
        chatMessagesContainer.appendChild(bubble);
        
        // Auto scroll to the bottom of message list
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }

    // AI typing simulation helper
    function simulateAiResponse(userMessage) {
        // Simple typing delay representation
        const normalizedMsg = userMessage.toLowerCase().trim();
        let aiText = "That's a great question! In the full Pillara app, our certified health-assistant AI reads your specific prescription sheets and guides you through dosage rules, food safety, and side effects. Download the app to try the live connection!";
        
        // Check if message matches one of our presets
        for (const presetKey in responses) {
            if (normalizedMsg.includes(presetKey) || presetKey.includes(normalizedMsg)) {
                aiText = responses[presetKey];
                break;
            }
        }

        // Add a loading message bubble briefly
        const loadingBubble = document.createElement('div');
        loadingBubble.classList.add('message', 'incoming');
        loadingBubble.style.opacity = '0.7';
        loadingBubble.textContent = "AI is writing...";
        chatMessagesContainer.appendChild(loadingBubble);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

        setTimeout(() => {
            // Remove typing bubble and append actual message
            loadingBubble.remove();
            appendMessage(aiText, false);
        }, 1200);
    }

    // Handle user sending text message
    function handleUserSend() {
        const query = chatInputField.value.trim();
        if (query === "") return;

        appendMessage(query, true);
        chatInputField.value = "";
        simulateAiResponse(query);
    }

    chatSendBtn.addEventListener('click', handleUserSend);
    chatInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserSend();
        }
    });

    // Handle suggestion chips clicks
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const questionText = chip.textContent;
            appendMessage(questionText, true);
            simulateAiResponse(questionText);
        });
    });


    /* ==========================================
       3. Daily Medicine Tracker Simulator
       ========================================== */
    const trackerFraction = document.getElementById('tracker-fraction');
    const trackerPercentText = document.getElementById('tracker-percent-text');
    const trackerProgressCircle = document.getElementById('tracker-progress-circle');
    const congratsBanner = document.getElementById('congrats-banner');
    const trackerItems = document.querySelectorAll('.tracker-item');
    const btnResetTracker = document.getElementById('btn-reset-tracker');

    // Total tracker elements count
    const totalMeds = trackerItems.length;
    let takenCount = 0;

    // SVG circle circumference variables
    // Circumference = 2 * PI * r = 2 * 3.14159 * 18 = ~113px
    const circleCircumference = 113;

    function updateTrackerProgress() {
        trackerFraction.textContent = `${takenCount} of ${totalMeds} taken`;
        
        const percentage = Math.round((takenCount / totalMeds) * 100);
        trackerPercentText.textContent = `${percentage}%`;

        // Calculate SVG circle dashoffset
        // 0% -> dashoffset = 113
        // 100% -> dashoffset = 0
        const dashoffset = circleCircumference - (takenCount / totalMeds) * circleCircumference;
        trackerProgressCircle.style.strokeDashoffset = dashoffset;

        // Display congrats banner if all medicines taken
        if (takenCount === totalMeds) {
            congratsBanner.style.display = 'block';
        } else {
            congratsBanner.style.display = 'none';
        }
    }

    trackerItems.forEach(item => {
        const checkBtn = item.querySelector('.tracker-check-btn');

        checkBtn.addEventListener('click', () => {
            // Prevent double-checking
            if (item.classList.contains('completed')) return;

            item.classList.add('completed');
            checkBtn.classList.add('checked');
            checkBtn.textContent = 'Taken';
            
            takenCount++;
            updateTrackerProgress();
        });
    });

    // Reset simulator state
    btnResetTracker.addEventListener('click', () => {
        takenCount = 0;
        trackerItems.forEach(item => {
            item.classList.remove('completed');
            const checkBtn = item.querySelector('.tracker-check-btn');
            checkBtn.classList.remove('checked');
            checkBtn.textContent = 'Take';
        });
        updateTrackerProgress();
    });

});
