document.addEventListener('DOMContentLoaded', () => {
    fetch('kukaolen.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('introduction').innerHTML = data.introduction;
            document.getElementById('background').innerHTML = data.background;
            document.getElementById('conclusion').innerHTML = data.conclusion;
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});