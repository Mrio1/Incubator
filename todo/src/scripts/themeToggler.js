export default  function addThemeToggler() {
    const togglerCheckbox = document.getElementById('togglerCheckbox');
    const toggler = document.getElementById('toggler');
    let theme = getLocalTheme();
    if (theme == 'dark') {
        toggler.checked = true;
    }
    toggler.addEventListener('change', (event)=> {
        event.stopPropagation();
        if (togglerCheckbox.checked) {
            theme = 'dark'
        } else {
            theme = 'light'
        }
        changeLocalTheme(theme)
    })
    toggler.click();
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
    const rootCssLink = document.getElementById('style-root');
    const currentHref = rootCssLink.getAttribute('href');
    if (currentHref.indexOf('dark') >= 0) {
        rootCssLink.setAttribute('href', rootCssLink.getAttribute('href').replace('dark', 'light'));
    } else {
        rootCssLink.setAttribute('href', rootCssLink.getAttribute('href').replace('light', 'dark'));
    }
    console.log()
}
