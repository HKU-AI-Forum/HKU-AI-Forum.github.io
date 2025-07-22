// -- Data for schedule --
const scheduleData = [
    // Day 1
    { timeCategory: 'day1', type: 'title', time: 'Oct 26', title: 'Opening Remarks' },
    { timeCategory: 'day1', type: 'event', time: '09:00–09:15', session: 'Opening Remarks', speaker: 'Prof. Yi Ma', affiliation: 'HKU' },
    { timeCategory: 'day1', type: 'title', title: 'Invited Talk' },
    { timeCategory: 'day1', type: 'event', time: 'TBD', session: 'TBD', speaker: 'TBD', affiliation: 'TBD' },
    { timeCategory: 'day1', type: 'day-separator' },

    // Day 2
    { timeCategory: 'day2', type: 'title', time: 'Oct 27', title: 'Invited Talk, Poster Session, and Panel Discussion' },
    { timeCategory: 'day2', type: 'event', time: 'TBD', session: 'TBD', speaker: 'TBD', affiliation: 'TBD' },
    { timeCategory: 'day2', type: 'day-separator' },

    // Day 3
    { timeCategory: 'day3', type: 'title', time: 'Oct 28', title: 'Closed-door Discussion' },
    { timeCategory: 'day3', type: 'event', time: '09:00–12:00', session: 'Discussion', speaker: 'Invited Participants Only', affiliation: '-' }
];

// --- Data for participants ---
const speakersData = [
    { name: 'Jun Zhu', affiliation: 'Tsinghua University', img: 'asset/avatars/Jun_Zhu.jpg', url: 'https://ml.cs.tsinghua.edu.cn/~jun/index.shtml' },
    { name: 'Jiajun Wu', affiliation: 'Stanford University', img: 'asset/avatars/Jiajun_Wu.jpg', url: 'https://jiajunwu.com/' },
    { name: 'Saining Xie', affiliation: 'New York University', img: 'asset/avatars/Saining_Xie.png', url: 'https://www.sainingxie.com/' },
    { name: 'Qing Qu', affiliation: 'University of Michigan', img: 'asset/avatars/Qing_Qu.jpeg', url: 'https://qingqu.engin.umich.edu/' },
    { name: 'Yang You', affiliation: 'NUS', img: 'asset/avatars/Yang_You.png', url: 'https://www.comp.nus.edu.sg/~youy/' },
    { name: 'Jianchao Yang', affiliation: 'ByteDance', img: 'asset/avatars/Jianchao_Yang.jpg', url: 'https://ieeexplore.ieee.org/author/37406108300' },
];

const organizersData = [
    { name: 'Yi Ma', affiliation: 'HKU', title: 'General Chair', img: 'asset/avatars/Yi_Ma.jpg', url: 'https://www.cs.hku.hk/index.php/people/academic-staff/mayi' },
    { name: 'Ping Luo', affiliation: 'HKU', title: 'Program Chair', img: 'asset/avatars/Ping_Luo.jpg', url: 'http://luoping.me/' },
    { name: 'Xihui Liu', affiliation: 'HKU', title: 'Program Chair', img: 'asset/avatars/Xihui_Liu.jpeg', url: 'https://xh-liu.github.io/' },
    { name: 'Bo Dai', affiliation: 'HKU', title: 'Local Chair', img: 'asset/avatars/Bo_Dai.jpg', url: 'https://daibo.info/' },
    { name: 'Hongyang Li', affiliation: 'HKU', title: 'Publicity Chair', img: 'asset/avatars/Hongyang_Li.jpg', url: 'https://lihongyang.info/' },
    { name: 'Yanchao Yang', affiliation: 'HKU', title: 'Industry Liaison Chair', img: 'asset/avatars/Yanchao_Yang.jpg', url: 'https://datascience.hku.hk/people/yanchao-yang/' }
];

// --- Card Generation Function ---
/**
 * Creates an HTML card for a speaker or organizer.
 * @param {object} person - An object with name, affiliation, img, and url.
 * @returns {string} - The HTML string for the card.
 */
function createParticipantCard(person) {
    return `
        <div class="card">
            <a href="${person.url}" target="_blank" rel="noopener noreferrer">
                <img src="${person.img}" alt="${person.name}">
                <h3>${person.name}</h3>
            </a>
            
            <div class="card-affiliation">${person.affiliation}</div>
            
            ${/* Check if title exists and conditionally render it */
              person.title 
              ? `<div class="card-title">${person.title}</div>` 
              : ''
            }
        </div>
    `;
}

// --- Page Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const scheduleBody = document.getElementById('schedule-body');
    const speakersGrid = document.getElementById('speakers-grid');
    const organizersGrid = document.getElementById('organizers-grid');
    const scrollArrow = document.getElementById('scroll-arrow');
    const coverPage = document.getElementById('cover-page');
    const mainContent = document.getElementById('main-content');

    // --- Cover Page Transition ---

    // Ensure the cover page and main content are initially set up correctly
    let hasTransitioned = false;

    /**
     * Changes the page from the cover to the main content. 
     */
    function performPageTransition() {
        if (hasTransitioned) {
            return;
        }
        hasTransitioned = true;

        coverPage.style.opacity = '0';
        
        setTimeout(() => {
            coverPage.style.display = 'none';
            mainContent.style.display = 'block';

            // 平滑滚动到 "About" 部分
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
 }, 500); // 这个时间应与 CSS 中的 transition duration 匹配
    }

    // 1. add click event listener to the scroll arrow
    if (scrollArrow) {
        scrollArrow.addEventListener('click', (event) => {
            event.preventDefault();
            performPageTransition();
        });
    }

    // 2. add keydown event listener for Enter key
    window.addEventListener('wheel', (event) => {
        // event.deltaY > 0 表示滚轮向下滚动
        if (event.deltaY > 0) {
            performPageTransition();
        }
    });


    // Schedule section
    if (scheduleBody) {
        let scheduleHTML = '';
        scheduleData.forEach(item => {
            if (item.type === 'title') {
                // if it's a title, create a single row with colspan
                scheduleHTML += `<tr class="${item.timeCategory || ''}"><td colspan="4"><strong color='black'>${item.time ? item.time : ''}</strong> <div class="schedule-title">${item.title}</div></td></tr>`;
                // scheduleHTML += `<tr><td><strong>${item.time}</strong></td><td colspan="3" class="schedule-title">${item.title}</td></tr>`;
            } else if (item.type === 'separator') {
                // if it's a separator, create a single row with colspan
                scheduleHTML += `<tr class="${item.timeCategory || ''}"><td colspan="4">${item.title} ${item.time}</td></tr>`;
                // scheduleHTML += `<tr><td>${item.time}</td><td colspan="3">${item.title}</td></tr>`;
            } else if (item.type === 'day-separator') {
                // 如果是日期分隔符，创建一个带有特殊样式的行
                scheduleHTML += `<tr class="day-separator"><td colspan="4"></td></tr>`;
            } else if (item.type === 'event') {
                // if it's an event, create a row with all details
                scheduleHTML += `
                    <tr class="${item.timeCategory || ''}">
                        <td>${item.time}</td>
                        <td>${item.session}</td>
                        <td>${item.speaker}</td>
                        <td>${item.affiliation}</td>
                    </tr>
                `;
            }
        });
        scheduleBody.innerHTML = scheduleHTML;
    }

    // Populate speakers
    if (speakersGrid) {
        let speakersHTML = '';
        speakersData.forEach(speaker => {
            speakersHTML += createParticipantCard(speaker);
        });
        speakersGrid.innerHTML = speakersHTML;
    }

    // Populate organizers
    if (organizersGrid) {
        let organizersHTML = '';
        organizersData.forEach(organizer => {
            organizersHTML += createParticipantCard(organizer); 
        });
        organizersGrid.innerHTML = organizersHTML;
    }
});
