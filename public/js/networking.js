// Add event listener to submit a new chat
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/networking', {
        method: 'POST',
        body: JSON.stringify(networkingEvent),
        headers: { 'Content-Type': 'application/json' },
    })

    const networkingEvent =


    {
    
        };

        
    if (response.ok) {
        document.location.replace('/networking');
    } else {
        alert('Failed to create a new networking event.');
    }
});
