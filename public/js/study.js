
// Define variables
const form = document.querySelector('form');
const tipTitle = document.querySelector('#tip');
const linkInput = document.querySelector('#link');
const photoInput = document.querySelector('#photo');
const gifInput = document.querySelectorAll('#gif');
const videoInput = document.querySelector('#video');
const submit = document.querySelectorAll('button');


// Add event listener to submit a new study tip
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const studyTip =
    {
        title: tipTitle.value,
        link: linkInput.value,
        photo: photoInput.value,
        gif: gifInput.value,
        video: videoInput.value
        };

        const response = await fetch('/api/study', {
            method: 'POST',
            body: JSON.stringify(studyTip),
            headers: { 'Content-Type': 'application/json' },
        })
    if (response.ok) {
        document.location.replace('/study');
    } else {
        alert('Failed to create a new study tip.');
    }
});
