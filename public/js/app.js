
const info = document.querySelector('#info');
const yourNameInput = document.querySelector('#trainId');
const messageOne = document.querySelector('.message-1');
const messageTwo = document.querySelector('.message-2');

info.addEventListener('submit', (e) => {
    e.preventDefault();

    const trainId = yourNameInput.value;


    messageOne.textContent = 'Loading..';

    const data = {
        trainId
    }

    fetch('/status', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        response.json()
        .then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.heading;
                messageTwo.textContent = data.message;
            }
        })
    })

})
