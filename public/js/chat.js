
// const cloudinary = require('cloudinary').v2;
// import {v2 as cloudinary} from 'cloudinary';
// cloudinary.config({
//   cloud_name: "dtbznjxtz",
// });
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
const value = document.getElementById("link");


// if a media file was selected, read the file and set the media_file property of the new chat object to the base64-encoded data URL of the file

// let myWidget = cloudinary.createUploadWidget({
//   cloudName: 'dtbznjxtz', 
//   uploadPreset: 'eihxr5yn'}, (error, result) => { 
//     if (!error && result && result.event === "success") { 
//       console.log('Done! Here is the image info: ', result.info);
//     }
//   }
// )

// document.getElementById("upload_widget").addEventListener("click", function(){
//     myWidget.open();
//   }, false);
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

    // cloudinary.url(mediaFileInput.value, {width: 200, height: 200, crop: 'fill', fetch_format});
    // function cloud(media) {cloudinary.v2.uploader.upload(media)
    // .then((result) => {result=>console.log(result);});}

    // cloud(mediaInput.value);
    console.log(mediaFileInput.value);
    // if (mediaSelect.value === 'image' && mediaFileInput.files.length > 0) {
    //   const file = mediaFileInput.files[0];
    //   const reader = new FileReader();
    //   reader.onload = function(event) {
    //     newChat.media_file = event.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // }
    // const url = URL.createObjectURL(mediaFileInput.value);
    // console.log(url);
    // const imageUrl = await cloudinary.url(mediaFileInput.value);
    // console.log(imageUrl);
    const link = value.innerHTML;
    console.log(link);

    const newChat = 
    {
        // user_name: userNameInput.value,
        user_name: "jack",
        message: messageInput.value,
        photo: "http://res.cloudinary.com/dov0ohe0b/image/upload/v1682190412/rizq8fiimfkhdplyvnks.jpg",
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

