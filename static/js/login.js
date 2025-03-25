const icon = document.getElementById('mode-icon')

icon.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    const body = document.getElementById('container')
    if(icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        
        body.classList.add('dark')
        form.classList.add('dark');
        return;
    }

    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    form.classList.remove('dark')
    body.classList.remove('dark')
});