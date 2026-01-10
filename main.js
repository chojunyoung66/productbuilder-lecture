const dinnerMenus = [
    { name: "치킨", imageUrl: "https://i.namu.wiki/i/G3bXhG3s9yIPl5Rj2JG2d02aR9T01W_8Gprx-6x8brr3oJ61C1s5XfZc5xZ22J7AHXgDKt2wJgH0msy2q-hC6A.webp" },
    { name: "피자", imageUrl: "https://cdn.auth.wiki/2/2f/%ED%94%BC%EC%9E%90.jpg" },
    { name: "파스타", imageUrl: "https://i.namu.wiki/i/2epYQy7d8Ea2z6s522xXELXg2hB_f4YcW1aWc1j21xSoo2yQx6x8M_wOOA-19cQ3qY3-zB7b-vj-mQ.webp" },
    { name: "삼겹살", imageUrl: "https://i.namu.wiki/i/iO16iQe1k-ayx3s5dnK3gQWAnitp0rBq08b2b1Hw0R_P_7_x-j-9KcES2K3s-H7dYx_U-B6g-D6Xaw.webp" },
    { name: "초밥", imageUrl: "https://i.namu.wiki/i/Lw0HXSv9tS-4l_i9xEnYsoxNStg5qVEzHE48m1K2wzP50pLtj_8L5mNf-e-E5Loa5b3N-f7X9bK-wA.webp" },
    { name: "떡볶이", imageUrl: "https://i.namu.wiki/i/oKj44grhvT_aW02wT9r3eJLjIe-X_9w-H_L_z-r7bKq_Xz-dY8L9Vb-X_z-Z8j2Y7s-X.webp" },
    { name: "김치찌개", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "된장찌개", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "부대찌개", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "곱창", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "족발", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "보쌈", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "카레", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "라멘", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "햄버거", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "샌드위치", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "샐러드", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
    { name: "마라탕", imageUrl: "https://i.namu.wiki/i/w-h-h8I5f_j7X_v-I-j9j_w-X-x-y-z-A-B-C-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u.webp" },
];

const suggestionBtn = document.getElementById('suggestion-btn');
const resultContainer = document.getElementById('result-container');
const menuList = document.getElementById('menu-list');

// Function to populate the list of all menus
function populateMenuList() {
    dinnerMenus.forEach(menu => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = menu.imageUrl;
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
    thinkingText.classList.add('result-card');
    resultContainer.appendChild(thinkingText);

    suggestionBtn.disabled = true;

    setTimeout(() => {
        resultContainer.innerHTML = '';

        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const selectedMenu = dinnerMenus[randomIndex];

        const resultCard = document.createElement('div');
        resultCard.classList.add('result-card');
        
        const img = document.createElement('img');
        img.src = selectedMenu.imageUrl;
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
