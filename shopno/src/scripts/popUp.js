class WorkPopup {
    constructor(workArea) {
        this.workArea = workArea;
        this.addPopup();
        this.addClickHandler();
    }

    addClickHandler() {
        this.workArea.addEventListener('click', () => {
            this.clickHandler(event);
        })
    }

    clickHandler({target}){
        if (target.tagName == 'IMG' && target.classList.contains('examples__image')) {
            this.activatePopup(target)
        }
    }

    activatePopup(target) {
        this.popupNode.style.display = 'flex';
        this.popupImage.setAttribute('src', target.getAttribute('src'));
        this.popupClickHandler = this.deactivatePopup.bind(this);
        this.popupNode.addEventListener('click', this.popupClickHandler)
    }

    deactivatePopup() {
        this.popupNode.style.display = 'none';
        this.popupNode.removeEventListener('click', this.popupClickHandler)
    }

    addPopup() {
        this.popupNode = this.createPopupNode();
        document.body.appendChild(this.popupNode);
        this.popupImage = document.getElementById('examplesImage');
    }

    createPopupNode() {
        const node = document.createElement('div');
        node.setAttribute('id', 'examplesPopup');
        node.innerHTML = `<img id="examplesImage" src="" alt=""></img>`
        return node;
    }
}

export default WorkPopup;
