document.getElementById('loginButton').addEventListener('click', function() {
    this.style.opacity = 0;
    setTimeout(() => {
        this.style.display = 'none';
        displayRandomCode()
    }, 500);
});

function displayRandomCode() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomCode = '';
    for (let i = 0; i < 20; i++) {
        randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('randomCode').textContent = randomCode;
}
