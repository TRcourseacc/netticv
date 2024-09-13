fetch('kukaolen.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').innerText = data.title;
        document.getElementById('introduction').innerText = data.introduction;
        document.getElementById('background').innerText = data.background;
        document.getElementById('conclusion').innerText = data.conclusion;
    })
    .catch(error => console.error('Error fetching the JSON:', error));