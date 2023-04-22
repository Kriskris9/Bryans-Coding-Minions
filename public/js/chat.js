// const cloudinary = require('cloudinary').v2;
// Define variables
const form = document.querySelector('form');
const userNameInput = document.querySelector('#user_name');
const messageInput = document.querySelector('#message');
const mediaSelect = document.querySelector('#media');
const mediaInput = document.querySelector('#media-input');
const mediaFileInput = document.querySelector('#media_file');
const chats = document.querySelectorAll('.chat-details');
const submit = document.querySelectorAll('button');
const none = document.querySelector('#none');
const image = document.querySelector('#image');
const gif = document.querySelector('#gif');
const video = document.querySelector('#video');


// Add event listener to hide/show the media input field
mediaSelect.addEventListener('change', () => {
  if (mediaSelect.value === 'none') {
    mediaInput.style.display = 'none';
  } else {
    mediaInput.style.display = 'block';
  }
});

// Add event listener to submit a new chat
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    cloudinary.url(mediaFileInput.value, {width: 200, height: 200, crop: 'fill', fetch_format});
    // function cloud(media) {cloudinary.v2.uploader.upload(media)
    // .then((result) => {result=>console.log(result);});}

    // cloud(mediaInput.value);

    const newChat = 
    {
        // user_name: userNameInput.value,
        user_name: "jack",
        message: messageInput.value,
        photo: mediaFileInput.value,
        gif: null,
        video: null
        // media: mediaSelect.value,
        // media_file: mediaFileInput.value
        };
        console.log(newChat);
    
    const response = await fetch('api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newChat),
    })
    // .then((response) => response.json());
  
 
    if (response.ok) {
        document.location.replace('/chat');
    } else {
        alert('Failed to create a new chat.');
    }
});
