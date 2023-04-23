// Add event listener to submit a new chat
// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const newMeme = {
//         title: 
//     }

//     const response = await fetch('/api/memes', {
//         method: 'POST',
//         body: JSON.stringify(newMeme),
//         headers: { 'Content-Type': 'application/json' },
//     })
 
//     if (response.ok) {
//         document.location.replace('/memes');
//     } else {
//         alert('Failed to create a new meme.');
//     }
// });

// Define variables
// const form = document.querySelector('form');
// const memeTitle = document.querySelector('#title');
// const memeDescription = document.querySelector('#description');
// const memeLink = document.querySelector('#link');
// const memePhoto = document.querySelector('#photo');
// const memeGif = document.querySelectorAll('#gif');
// const memeVideo = document.querySelector('#video');
// const submit = document.querySelectorAll('button');
// ​
// Add event listener to submit a new meme
// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const newMeme = {
//         title: memeTitle.value,
//         description: memeDescription.value,
//         link: memeLink.value,
//         photo: memePhoto.value,
//         gif: memeGif.value,
//         video: memeVideo.value,
//     }
// ​
    const response = await fetch('/api/memes', {
        method: 'POST',
        body: JSON.stringify(newMeme),
        headers: { 'Content-Type': 'application/json' },
    })
 
    if (response.ok) {
        document.location.replace('/memes');
    } else {
        alert('Failed to create a new meme.');
    }
});
