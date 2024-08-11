document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        alert('Developer Tools istifadəsinə icazə verilmir.');
    }
});

function detectDevTools() {
    const threshold = 160;
    const element = document.createElement('div');
    element.style.width = `${threshold}px`;
    element.style.height = `${threshold}px`;
    element.style.overflow = 'hidden';
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    document.body.appendChild(element);
    
    const checkDevTools = setInterval(() => {
        if (element.offsetWidth > threshold || element.offsetHeight > threshold) {
            clearInterval(checkDevTools);
            window.location.href = '/'; // Yönlendirici URL
        }
    }, 1000);

    window.addEventListener('resize', () => {
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            clearInterval(checkDevTools);
            window.location.href = '/'; // Yönlendirici URL
        }
    });
}

document.addEventListener('DOMContentLoaded', detectDevTools);
