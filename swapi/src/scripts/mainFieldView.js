import "../styles/mainField.scss"

class MainFieldView {
    constructor() {
        this.init();
    }

    init() {
        this.parentField = document.querySelector('.cards');
    }

    updateField(data) {
        this.parentField.innerHTML = '';
        data.forEach(itemData => {
            this.addItem(itemData);
        });
    } 

    addItem(data) {
        const item = document.createElement('li');
        item.className = 'cards__item';
        const fieldNames = Object.keys(data).slice(0);
        let html = `
            <h3>${data[fieldNames[0]]}</h3>            
        `;
        
        fieldNames.slice(1).forEach((name, index) => {
            html += `<p>${name.replaceAll('_', ' ')}: ${data[name]}</p>`
        })
        item.innerHTML = html;
        this.parentField.append(item);
    }
}

export default MainFieldView;
