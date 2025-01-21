// Fetch and display member data
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Display member data
    const memberList = document.getElementById('member-list');
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        memberList.appendChild(card);
    });

    // Handle toggle view
    const toggleViewBtn = document.getElementById('toggle-view');
    toggleViewBtn.addEventListener('click', () => {
        if (memberList.classList.contains('grid-view')) {
            memberList.classList.remove('grid-view');
            memberList.classList.add('list-view');
            toggleViewBtn.textContent = 'Switch to Grid View';
        } else {
            memberList.classList.remove('list-view');
            memberList.classList.add('grid-view');
            toggleViewBtn.textContent = 'Switch to List View';
        }
    });

    // Set current year and last modified date
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified-date').textContent = document.lastModified;
});
