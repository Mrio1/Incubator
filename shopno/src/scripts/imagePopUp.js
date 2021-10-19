class ImagePopup {
    constructor(parentNode) {
        this.parentNode = parentNode;
        this.addPopup();
        this.parentNode.addEventListener('click', (e) => {
            this.clickHandler(event);
        })
    }

    clickHandler({target}){
        if (target.tagName === 'IMG' && target.classList.contains('examples__image')) {
            this.activatePopup(target)
        }
    }

    addPopup() {
        this.popupNode = this.createPopupNode();
        document.body.appendChild(this.popupNode);
        this.popupImage = document.getElementById('examplesImage');
    }

    createPopupNode() {
        const node = document.createElement('div');
        node.setAttribute('id', 'examplesPopup');
        node.className = 'popup';
        node.innerHTML = `<img id="examplesImage" src="" alt=""></img>`
        return node;
    }

    activatePopup(target) {
        this.popupNode.classList.add('popup--active');
        this.popupImage.setAttribute('src', target.getAttribute('src'));
        this.popupClickHandler = this.deactivatePopup.bind(this);
        this.popupNode.addEventListener('click', this.popupClickHandler);
        this.scrollOf();
    }

    deactivatePopup() {
        this.popupNode.classList.remove('popup--active');
        this.popupImage.removeAttribute('src');
        this.popupNode.removeEventListener('click', this.popupClickHandler);
        this.scrollOn();
    }

    scrollOf() {
        document.body.classList.add("scroll-off");
    }

    scrollOn() {
        document.body.classList.remove("scroll-off");
    }
}

export default ImagePopup;
