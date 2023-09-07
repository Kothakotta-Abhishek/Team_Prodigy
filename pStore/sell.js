const adForm = document.getElementById('adForm');
const adList = document.getElementById('adList');

adForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const contact = document.getElementById('contact').value;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <p>Price: $${price}</p>
        <p>Contact: ${contact}</p>
    `;

    adList.appendChild(listItem);

    adForm.reset();
});
