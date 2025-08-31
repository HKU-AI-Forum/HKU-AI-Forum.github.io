// -- Data for schedule --
const scheduleData = [
    // Day 1
    { timeCategory: 'day1', type: 'title', time: 'Oct 26', title: 'Opening Remarks' },
    { timeCategory: 'day1', type: 'event', time: '8:30-8:45', session: 'Opening Remarks', speaker: 'Prof. Yi Ma', affiliation: 'HKU' },
    { timeCategory: 'day1', type: 'title', title: 'Invited Talk' },
    { timeCategory: 'day1', type: 'event', time: '8:45-9:35', session: 'Invited Talk', speaker: 'Prof. Zhuowen Tu', affiliation: 'UCSD' },
    { timeCategory: 'day1', type: 'event', time: '9:35-10:25', session: 'Invited Talk', speaker: 'Prof. Jun Zhu', affiliation: 'Tsinghua University' },
    { timeCategory: 'day1', type: 'separator', time: '10:25-10:40', title: 'Tea Break' },
    { timeCategory: 'day1', type: 'event', time: '10:40-11:30', session: 'Invited Talk', speaker: 'Prof. Chen Change Loy', affiliation: 'NTU' },
    { timeCategory: 'day1', type: 'event', time: '11:30-12:00', session: 'Student Lightning Talks', speaker: '', affiliation: '' },
    { timeCategory: 'day1', type: 'separator', time: '12:00-14:00', title: 'Lunch Break' },
    { timeCategory: 'day1', type: 'event', time: '14:00-14:50', session: 'Invited Talk', speaker: 'Prof. Jiajun Wu', affiliation: 'Stanford University' },
    { timeCategory: 'day1', type: 'event', time: '14:50-15:40', session: 'Invited Talk', speaker: 'Prof. Saining Xie', affiliation: 'New York University' },
    { timeCategory: 'day1', type: 'event', time: '15:40-16:30', session: 'Invited Talk', speaker: 'Dr. Jianchao Yang', affiliation: 'ByteDance' },
    { timeCategory: 'day1', type: 'separator', time: '16:30-16:45', title: 'Tea Break' },
    { timeCategory: 'day1', type: 'event', time: '16:45-17:35', session: 'Invited Talk', speaker: 'Dr. Haoqi Fan', affiliation: 'ByteDance' },
    { timeCategory: 'day1', type: 'title', title: 'Discussion' },
    { timeCategory: 'day1', type: 'event', time: '17:35-18:00', session: 'Panel Discussion', speaker: '', affiliation: '' },
    { timeCategory: 'day1', type: 'day-separator' },

    // Day 2
    { timeCategory: 'day2', type: 'title', time: 'Oct 27', title: 'Invited Talk' },
    { timeCategory: 'day2', type: 'event', time: '9:00-9:50', session: 'Invited Talk', speaker: 'Prof. Ping Tan', affiliation: 'HKUST' },
    { timeCategory: 'day2', type: 'event', time: '9:50-10:40', session: 'Invited Talk', speaker: 'Prof. Harold Soh', affiliation: 'NUS' },
    { timeCategory: 'day2', type: 'separator', time: '10:40-11:00', title: 'Tea Break' },
    { timeCategory: 'day2', type: 'event', time: '11:00-12:00', session: 'Student Lightning Talks', speaker: '', affiliation: '' },
    { timeCategory: 'day2', type: 'separator', time: '12:00-14:00', title: 'Lunch Break' },
    { timeCategory: 'day2', type: 'event', time: '14:00-14:50', session: 'Invited Talk', speaker: 'Prof. Qing Qu', affiliation: 'University of Michigan' },
    { timeCategory: 'day2', type: 'event', time: '14:50-15:40', session: 'Invited Talk', speaker: 'Prof. Yang You', affiliation: 'NUS' },
    { timeCategory: 'day2', type: 'separator', time: '15:40-16:00', title: 'Tea Break' },
    { timeCategory: 'day2', type: 'title', title: 'Discussion' },
    { timeCategory: 'day2', type: 'event', time: '16:00-16:30', session: 'Panel Discussion', speaker: '', affiliation: '' },
    { timeCategory: 'day2', type: 'event', time: '16:30-18:00', session: 'Small Group Discussions', speaker: '', affiliation: '' },
    { timeCategory: 'day2', type: 'day-separator' }
];

// --- Data for participants ---
const speakersData = [
    { name: 'Zhuowen Tu', affiliation: 'UCSD', img: 'asset/avatars/Zhuowen_Tu.jpg', url: 'https://pages.ucsd.edu/~ztu/' },
    { name: 'Ping Tan', affiliation: 'HKUST', img: 'asset/avatars/Ping_Tan.jpg', url: 'https://ece.hkust.edu.hk/pingtan' },
    { name: 'Jun Zhu', affiliation: 'Tsinghua University', img: 'asset/avatars/Jun_Zhu.jpg', url: 'https://ml.cs.tsinghua.edu.cn/~jun/index.shtml' },
    { name: 'Chen Change Loy', affiliation: 'NTU', img: 'asset/avatars/Chen_Change_Loy.jpg', url: 'https://www.mmlab-ntu.com/person/ccloy/' },
    { name: 'Jiajun Wu', affiliation: 'Stanford University', img: 'asset/avatars/Jiajun_Wu.jpg', url: 'https://jiajunwu.com/' },
    { name: 'Saining Xie', affiliation: 'New York University', img: 'asset/avatars/Saining_Xie.png', url: 'https://www.sainingxie.com/' },
    { name: 'Jianchao Yang', affiliation: 'ByteDance', img: 'asset/avatars/Jianchao_Yang.jpg', url: 'https://ieeexplore.ieee.org/author/37406108300' },
    { name: 'Harold Soh', affiliation: 'NUS', img: 'asset/avatars/Harold_Soh.png', url: 'https://haroldsoh.com/' },
    { name: 'Qing Qu', affiliation: 'University of Michigan', img: 'asset/avatars/Qing_Qu.jpeg', url: 'https://qingqu.engin.umich.edu/' },
    { name: 'Yang You', affiliation: 'NUS', img: 'asset/avatars/Yang_You.png', url: 'https://www.comp.nus.edu.sg/~youy/' },
    { name: 'Haoqi Fan', affiliation: 'ByteDance', img: 'asset/avatars/Haoqi_Fan.jpg', url: 'https://haoqifan.github.io/' }
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
                scheduleHTML += `<tr class="${item.timeCategory || ''}"><td colspan="4">
                    <div style="color: gray; font-size: 0.85em;">
                        ${item.title} ${item.time}
                    </div>
                </td></tr>`;
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
