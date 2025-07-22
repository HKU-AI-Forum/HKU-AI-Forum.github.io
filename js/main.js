// -- Data for schedule --
const scheduleData = [
    // Day 1
    { timeCategory: 'day1', type: 'title', time: 'Oct 26', title: 'Opening Remarks' },
    { timeCategory: 'day1', type: 'event', time: '09:00–09:15', session: 'Official Welcome to the HKU AI Forum', speaker: 'Lead Organizer', affiliation: 'HKU' },
    { timeCategory: 'day1', type: 'title', title: 'Invited Talk' },
    { timeCategory: 'day1', type: 'event', time: '09:15–10:15', session: 'The Landscape of Modern AI', speaker: 'Alex Doe', affiliation: 'University A' },
    { timeCategory: 'day1', type: 'separator', time: '10:15-10:45', title: 'Coffee Break' },
    { timeCategory: 'day1', type: 'title', title: 'Panel Discussion' },
    { timeCategory: 'day1', type: 'event', time: '10:45–12:00', session: 'Ethics and Governance in Generative Models', speaker: 'Alex Doe, Brenda Smith, Charlie Brown', affiliation: '-' },
    { timeCategory: 'day1', type: 'event', time: '14:00–15:15', session: 'Commercializing AI Research', speaker: 'Brenda Smith, Ethan Hunt, Fiona Glenanne', affiliation: '-' },
    { timeCategory: 'day1', type: 'day-separator' },

    // Day 2
    { timeCategory: 'day2', type: 'title', time: 'Oct 27', title: 'Invited Talk' },
    { timeCategory: 'day2', type: 'event', time: '09:15–10:15', session: 'Novel Architectures for AI Scalability', speaker: 'Diana Prince', affiliation: 'University D' },
    { timeCategory: 'day2', type: 'separator', time: '10:15-10:45', title: 'Coffee Break' },
    { timeCategory: 'day2', type: 'title', title: 'Panel Discussion' },
    { timeCategory: 'day2', type: 'event', time: '10:45–12:00', session: 'AI Applications Across Industries', speaker: 'Charlie Brown, Diana Prince, Ethan Hunt', affiliation: '-' },
    { timeCategory: 'day2', type: 'day-separator' },

    // Day 3
    { timeCategory: 'day3', type: 'title', time: 'Oct 28', title: 'Closed-door Discussion' },
    { timeCategory: 'day3', type: 'event', time: '09:00–12:00', session: 'Strategy Session & Future Planning', speaker: 'Invited Participants Only', affiliation: '-' }
];

// --- Data for participants ---
const speakersData = [
    { name: 'Jun Zhu', affiliation: 'Tsinghua University', img: 'https://ml.cs.tsinghua.edu.cn/~jun/images/junzhu.jpg', url: 'https://ml.cs.tsinghua.edu.cn/~jun/index.shtml' },
    { name: 'Jiajun Wu', affiliation: 'Stanford University', img: 'https://jiajunwu.com/images/Jiajun_Wu.jpg', url: 'https://jiajunwu.com/' },
    { name: 'Saining Xie', affiliation: 'New York University', img: 'https://www.sainingxie.com/imgs/portrait.png', url: 'https://www.sainingxie.com/' },
    { name: 'Qing Qu', affiliation: 'University of Michigan', img: 'https://qingqu.engin.umich.edu/wp-content/uploads/sites/42/2021/08/AE0E7C9E-9D72-4FDB-9C6B-1D3E19DCCE72_1_105_c.jpeg', url: 'https://qingqu.engin.umich.edu/' },
    { name: 'Yang You', affiliation: 'NUS', img: 'https://www.comp.nus.edu.sg/~youy/index_files/yangyou3.png', url: 'https://www.comp.nus.edu.sg/~youy/' },
    { name: 'Jianchao Yang', affiliation: 'ByteDance', img: 'https://2020.acmmm.org/asset/images/chairs/jianchao-yang.jpg', url: 'https://ieeexplore.ieee.org/author/37406108300' },
];

const organizersData = [
    { name: 'Yi Ma', affiliation: 'HKU', title: 'General Chair', img: 'https://www.cs.hku.hk/images/Staff/mayi_full.jpg', url: 'https://www.cs.hku.hk/index.php/people/academic-staff/mayi' },
    { name: 'Ping Luo', affiliation: 'HKU', title: 'Program Chair', img: 'http://luoping.me/author/ping-luo/avatar_hu27a28382be217908a392d40ede6858cd_197018_270x270_fill_q90_lanczos_center.jpg', url: 'http://luoping.me/' },
    { name: 'Xihui Liu', affiliation: 'HKU', title: 'Program Chair', img: 'https://xh-liu.github.io/files/XihuiLiu-photo.jpeg', url: 'https://xh-liu.github.io/' },
    { name: 'Bo Dai', affiliation: 'HKU', title: 'Local Chair', img: 'https://daibo.info/imgs/photo.jpg', url: 'https://daibo.info/' },
    { name: 'Hongyang Li', affiliation: 'HKU', title: 'Publicity Chair', img: 'https://lihongyang.info/content/hongyang_li.jpg', url: 'https://lihongyang.info/' },
    { name: 'Yanchao Yang', affiliation: 'HKU', title: 'Industry Liaison Chair', img: 'https://datascience.hku.hk/wp-content/uploads/2023/04/photo-yanchan-yang-2-1-650x650.jpg', url: 'https://datascience.hku.hk/people/yanchao-yang/' }
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