//Define variables
const form = document.querySelector('#form');
const locationInput = document.querySelector('#location');
const linkInput = document.querySelector('#link');
const eventnameInput = document.querySelector('#event_name');
const eventdateInput = document.querySelector('#date');
const eventphotoinput = document.querySelector('#photo');
const submit = document.querySelectorAll('button');

// const networkingEvent = {
//     name: input.value,
// };


// Add event listener to submit a new chat
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const networkingEvent =
    {   
        name: eventnameInput.value,
        location: locationInput.value,
        link: linkInput.value,
        date: eventdateInput.value,
        photo: eventphotoinput.value,
        
        };

    const response = await fetch('/api/networking', {
        method: 'POST',
        body: JSON.stringify(networkingEvent),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/networking');
    } else {
        alert('Failed to create a new networking event.');
    }
});
