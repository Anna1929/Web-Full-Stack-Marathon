let dragElement = null;
let startX, startY, origX, origY;

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mousedown', function(event) {
        if (!this.classList.contains('off')) {
            startX = event.clientX;
            startY = event.clientY;
            origX = this.offsetLeft;
            origY = this.offsetTop;
            dragElement = this;
        }
    });

    box.addEventListener('mousemove', function(event) {
        if (dragElement === this) {
            let moveX = origX + event.clientX - startX;
            let moveY = origY + event.clientY - startY;
            this.style.left = moveX + 'px';
            this.style.top = moveY + 'px';
        }
    });

    box.addEventListener('mouseup', function() {
        dragElement = null;
    });

    box.addEventListener('click', function() {
        this.classList.toggle('off');
    });
});