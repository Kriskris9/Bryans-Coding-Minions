// Add event listener to submit a new chat
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/study', {
        method: 'POST',
        body: JSON.stringify(studyTip),
        headers: { 'Content-Type': 'application/json' },
    })

    const studyTip =
    {
      
        };

 
    if (response.ok) {
        document.location.replace('/study');
    } else {
        alert('Failed to create a new study tip.');
    }
});
