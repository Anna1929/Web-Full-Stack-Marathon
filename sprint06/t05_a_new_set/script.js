document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const fileInput = document.getElementById('photo');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';

    formData.append('fileName', fileName);

    fetch('/answers', {
        method: 'POST',
        body: new URLSearchParams(formData)
    })
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('result');
            resultElement.innerText = 'Array\n{\n' + Array.from(formData).filter(([key, value]) => key !== 'photo').map(([key, value]) => `[${key}] => ${value}`).join('\n') + '\n}\n';
        });
});