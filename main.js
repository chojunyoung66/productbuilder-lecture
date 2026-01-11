// --- Form Submission ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) { // Check if elements exist
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        formStatus.classList.remove('success', 'error');
        formStatus.textContent = '메시지를 보내는 중...';

        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = '문의가 성공적으로 전송되었습니다!';
            formStatus.classList.add('success');
            contactForm.reset(); // Clear form fields
        } else {
            const data = await response.json();
            if (data.errors) {
                formStatus.textContent = data.errors.map(error => error.message).join(', ');
            } else {
                formStatus.textContent = '문의 전송에 실패했습니다. 다시 시도해주세요.';
            }
            formStatus.classList.add('error');
        }
    });
}


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
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// --- Theme Toggling ---
if (themeToggleBtn) { // Check if button exists before adding listener
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme on initial load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ 라이트 모드';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☀️ 라이트 모드';
        } else {
            themeToggleBtn.textContent = '🌙 다크 모드';
        }
        localStorage.setItem('theme', theme);
    });
}


// --- Menu Suggestion ---
// Only run menu suggestion logic if elements exist on the page
if (suggestionBtn && resultContainer && menuList) {
    // Function to get an image URL from Unsplash Source
    function getUnsplashImageUrl(query, width, height) {
        return `https://source.unsplash.com/${width}x${height}/?${query},food`;
    }

    // Function to populate the list of all menus
    function populateMenuList() {
        menuList.innerHTML = ''; // Clear existing list
        dinnerMenus.forEach(menu => {
            const li = document.createElement('li');
            
            const img = document.createElement('img');
            img.src = getUnsplashImageUrl(menu.name, 120, 80);
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
            img.src = getUnsplashImageUrl(selectedMenu.name, 300, 200);
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
}
