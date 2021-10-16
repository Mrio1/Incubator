class NavigationView {
    constructor(categoryClickCb) {
        this.init();
        this.categoryClickCb = categoryClickCb;
        
    }

    init() {
        this.navBlock = document.getElementById('navigationPanel');
        this.categoryList = document.querySelectorAll('.nav__item');
        this.navBlock.addEventListener('click', this.navClickHandler.bind(this))
    }

    navClickHandler({target}) {
        if (target.classList.contains('nav__item')) {
            this.activateCategory(target);
            const category = target.dataset.category;
            this.categoryClickCb(category.toLowerCase())
        }
    }

    activateCategory(newActiveCategory) {
        this.categoryList.forEach(category => {
            category.classList.remove('nav__item--active');
        })
        newActiveCategory.classList.add('nav__item--active');
    }
}

export default NavigationView;
