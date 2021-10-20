const bodyNode = document.body;
const togglerCheckbox = document.getElementById('togglerCheckbox');
const toggler = document.getElementById('toggler');
const togglerInput = toggler.querySelector('input');
let theme = null;

function addThemeToggler() {
    let colorTheme = getLocalTheme();
    if (colorTheme == 'dark') {
        togglerInput.checked = true;
        changeTheme(colorTheme)
    }

    toggler.addEventListener('change', (event)=> {
        if (togglerCheckbox.checked) {
            theme = 'dark'
        } else {
            theme = 'light'
        }
        changeTheme(theme)
    })
}

function changeTheme(theme) {
    localStorage.setItem('colorTheme', theme);
    bodyNode.classList.toggle('theme-dark');
    bodyNode.classList.toggle('theme-light');
}

function getLocalTheme() {
    let theme = localStorage.getItem('colorTheme');
    if (!theme) {
        localStorage.setItem('colorTheme', 'light');
        theme = 'light';
    }
    return theme;
}

export default addThemeToggler;
