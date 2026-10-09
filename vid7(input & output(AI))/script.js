const loginForm = document.getElementById('loginForm');
const applicationForm = document.getElementById('applicationForm');
const logout = document.getElementById('logout');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (loginForm.checkValidity()) window.location.href = 'index.html';
        else document.getElementById('error').style.display = 'block';
    });
}

if (applicationForm) {
    applicationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (applicationForm.checkValidity()) document.getElementById('success').style.display = 'block';
    });
}

if (logout) logout.addEventListener('click', () => { window.location.href = 'login.html'; });
