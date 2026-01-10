const dinnerMenus = [
    { name: "치킨" },
    { name: "피자" },
    { name: "파스타" },
    { name: "삼겹살" },
    { name: "초밥" },
    { name: "떡볶이" },
    { name: "김치찌개" },
    { name: "된장찌개" },
    { name: "부대찌개" },
    { name: "곱창" },
    { name: "족발" },
    { name: "보쌈" },
    { name: "카레" },
    { name: "라멘" },
    { name: "햄버거" },
    { name: "샌드위치" },
    { name: "샐러드" },
    { name: "마라탕" },
];

const suggestionBtn = document.getElementById('suggestion-btn');
const resultContainer = document.getElementById('result-container');
const menuList = document.getElementById('menu-list');

// Function to get an image URL from Unsplash Source
function getUnsplashImageUrl(query, width, height) {
    return `https://source.unsplash.com/${width}x${height}/?${query}`;
}

// Function to populate the list of all menus
function populateMenuList() {
    menuList.innerHTML = ''; // Clear existing list
    dinnerMenus.forEach(menu => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        // Use a more specific query for better images, e.g., "korean food"
        img.src = getUnsplashImageUrl(menu.name + ',food', 120, 80);
        img.alt = menu.name;
        
        const span = document.createElement('span');
        span.textContent = menu.name;
        
        li.appendChild(img);
        li.appendChild(span);
        menuList.appendChild(li);
    });
}

suggestionBtn.addEventListener('click', () => {
    resultContainer.innerHTML = '';
    const thinkingText = document.createElement('div');
    thinkingText.textContent = '고민 중... 🤔';
    thinkingText.classList.add('result-card', 'thinking');
    resultContainer.appendChild(thinkingText);

    suggestionBtn.disabled = true;

    setTimeout(() => {
        resultContainer.innerHTML = '';

        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const selectedMenu = dinnerMenus[randomIndex];

        const resultCard = document.createElement('div');
        resultCard.classList.add('result-card');
        
        const img = document.createElement('img');
        img.src = getUnsplashImageUrl(selectedMenu.name + ',food', 300, 200);
        img.alt = selectedMenu.name;
        
        const h3 = document.createElement('h3');
        h3.textContent = selectedMenu.name;
        
        resultCard.appendChild(img);
        resultCard.appendChild(h3);
        
        resultContainer.appendChild(resultCard);

        suggestionBtn.disabled = false;
    }, 1500);
});

document.addEventListener('DOMContentLoaded', populateMenuList);
