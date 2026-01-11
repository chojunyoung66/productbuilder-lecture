document.addEventListener('DOMContentLoaded', () => {
    const sajuForm = document.getElementById('saju-form');
    const resultContainer = document.getElementById('saju-result');

    // Handle the theme for the saju page as well
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(themeToggleBtn) themeToggleBtn.textContent = '☀️ 라이트 모드';
    }
    
    if (themeToggleBtn) {
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


    if (sajuForm) {
        sajuForm.addEventListener('submit', (event) => {
            event.preventDefault();

            try {
                const year = parseInt(document.getElementById('year').value, 10);
                const month = parseInt(document.getElementById('month').value, 10);
                const day = parseInt(document.getElementById('day').value, 10);
                const hour = parseInt(document.getElementById('hour').value, 10);
                const gender = document.getElementById('gender').value;

                if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour)) {
                    throw new Error('생년월일시를 정확하게 입력해주세요.');
                }
                
                // Using kore-saju library
                const saju = new Saju(year, month, day, hour, 0, gender);
                
                displayResult(saju);

            } catch (error) {
                resultContainer.innerHTML = `<div class="error-message">오류: ${error.message}</div>`;
            }
        });
    }

    function displayResult(saju) {
        resultContainer.innerHTML = `
            <h3>사주팔자 결과</h3>
            <div class="pillars">
                <div class="pillar">
                    <div class="pillar-title">시주 (時柱)</div>
                    <div class="pillar-body">${saju.getHourGanju().toString()}</div>
                </div>
                <div class="pillar">
                    <div class="pillar-title">일주 (日柱)</div>
                    <div class="pillar-body">${saju.getDayGanju().toString()}</div>
                </div>
                <div class="pillar">
                    <div class="pillar-title">월주 (月柱)</div>
                    <div class="pillar-body">${saju.getMonthGanju().toString()}</div>
                </div>
                <div class="pillar">
                    <div class="pillar-title">년주 (年柱)</div>
                    <div class="pillar-body">${saju.getYearGanju().toString()}</div>
                </div>
            </div>
            <div class="interpretation">
                <h4>기본 정보</h4>
                <ul>
                    <li><strong>일간(日干):</strong> ${saju.getDayCheongan().toString()}</li>
                    <li><strong>지지(地支):</strong> ${saju.getDayJiji().toString()}</li>
                    <li><strong>음양(陰陽):</strong> ${saju.getEumYangText()}</li>
                    <li><strong>오행(五行):</strong> ${saju.getOhangText()}</li>
                </ul>
                <p class="notice">
                    <strong>참고:</strong> 이 결과는 만세력에 따른 사주팔자를 표시한 것이며, 상세한 운세 풀이를 제공하지는 않습니다.
                </p>
            </div>
        `;
    }
});
