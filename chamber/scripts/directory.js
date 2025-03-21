document.addEventListener('DOMContentLoaded', () => {
    const gridButton = document.getElementById('grid-view');
    const listButton = document.getElementById('list-view');
    const display = document.getElementById('members-display');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members);
        });

    gridButton.addEventListener('click', () => {
        display.classList.add('grid');
        display.classList.remove('list');
    });

    listButton.addEventListener('click', () => {
        display.classList.add('list');
        display.classList.remove('grid');
    });

    function displayMembers(members) {
        display.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');
            memberElement.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.description}</p>
            `;
            display.appendChild(memberElement);
        });
    }
});