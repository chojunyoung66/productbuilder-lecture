const dinnerMenus = [
    "치킨",
    "피자",
    "파스타",
    "삼겹살",
    "초밥",
    "떡볶이",
    "김치찌개",
    "된장찌개",
    "부대찌개",
    "곱창",
    "족발",
    "보쌈",
    "카레",
    "라멘",
    "햄버거",
    "샌드위치",
    "샐러드",
    "마라탕",
];

const suggestionBtn = document.getElementById('suggestion-btn');
const resultContainer = document.getElementById('result-container');

suggestionBtn.addEventListener('click', () => {
    // Clear previous result and show a thinking message
    resultContainer.innerHTML = '';
    const thinkingText = document.createElement('div');
    thinkingText.textContent = '고민 중... 🤔';
    thinkingText.classList.add('result-card');
    resultContainer.appendChild(thinkingText);

    // Disable button to prevent multiple clicks
    suggestionBtn.disabled = true;

    setTimeout(() => {
        // Clear the thinking message
        resultContainer.innerHTML = '';

        // Pick a random menu
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const selectedMenu = dinnerMenus[randomIndex];

        // Create and display the result card
        const resultCard = document.createElement('div');
        resultCard.textContent = selectedMenu;
        resultCard.classList.add('result-card');
        
        resultContainer.appendChild(resultCard);

        // Re-enable button
        suggestionBtn.disabled = false;
    }, 1500); // 1.5 seconds delay
});
