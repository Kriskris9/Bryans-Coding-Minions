// Add event listener to submit a new chat
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/memes', {
        method: 'POST',
        body: JSON.stringify(newMeme),
        headers: { 'Content-Type': 'application/json' },
    })

    const newMeme =
    {
      
        };
 
    if (response.ok) {
        document.location.replace('/memes');
    } else {
        alert('Failed to create a new meme.');
    }
});
