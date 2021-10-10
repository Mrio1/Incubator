export default function() {
    const toggler = document.getElementById('togglerCheckbox');
    const body = document.body;
    let theme = getLocalTheme();
    if (theme == 'dark') {
        toggler.checked = true;
    }
    body.className = theme;
    toggler.addEventListener('change', ()=> {
        if (toggler.checked) {
            theme = 'dark'
        } else {
            theme = 'light'
        }
        body.className = theme;
        changeLocalTheme(theme)
    })
}

function getLocalTheme() {
    let theme = localStorage.getItem('colorTheme');
    if (!theme) {
        localStorage.setItem('colorTheme', 'light');
        theme = 'light';
    }
    return theme;
}

function changeLocalTheme(theme) {
    localStorage.setItem('colorTheme', theme);
}
