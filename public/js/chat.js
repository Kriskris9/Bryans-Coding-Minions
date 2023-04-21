// Define variables
const form = document.querySelector('form');
const userNameInput = document.querySelector('#user_name');
const messageInput = document.querySelector('#message');
const mediaSelect = document.querySelector('#media');
const mediaInput = document.querySelector('#media-input');
const mediaFileInput = document.querySelector('#media_file');
const chats = document.querySelectorAll('.chat-details');
const submit = document.querySelectorAll('button');

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
    const newChat =
    {
        user_name: userNameInput.value,
        message: messageInput.value,
        media: mediaSelect.value,
        media_file: mediaFileInput.value
        };
    const response = await fetch('/api/chats', {
        method: 'POST',
        body: JSON.stringify(newChat),
        headers: { 'Content-Type': 'application/json' },
    })
''
    
 
    if (response.ok) {
        document.location.replace('/chat');
    } else {
        alert('Failed to create a new chat.');
    }
});

