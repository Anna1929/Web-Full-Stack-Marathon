document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const ans = document.querySelector('input[name="answer"]:checked').id;

    fetch(`/result?answer=${ans}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = data.correct ? 'Correct!' : 'Incorrect!';
        });
});