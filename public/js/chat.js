// Define variables
const form = document.querySelector('form');
const userNameInput = document.querySelector('#user_name');
const messageInput = document.querySelector('#message');
const mediaSelect = document.querySelector('#media');
const mediaInput = document.querySelector('#media-input');
const mediaFileInput = document.querySelector('#media_file');
const chats = document.querySelectorAll('.chat-details');

// Add event listener to hide/show the media input field
mediaSelect.addEventListener('change', () => {
  if (mediaSelect.value === 'none') {
    mediaInput.style.display = 'none';
  } else {
    mediaInput.style.display = 'block';
  }
});

