import {navViewDict} from './dictionary';

class NavigationView {
  constructor(categoryClickCb) {
    this.navBlock = document.getElementById(navViewDict.navIdName);
    this.categoryList = document.querySelectorAll(`.${navViewDict.categoryClassName}`);
    this.navBlock.addEventListener("click", this.navClickHandler.bind(this));
    this.categoryClickCb = categoryClickCb;
    this.burgerButton = document.getElementById(navViewDict.burgerId);
    this.burgerActiveWidth = 480;
    this.burgerButton.addEventListener('click', this.burgerButtonClickHandler.bind(this));
    this.navForm = document.querySelector(`.${navViewDict.formClassName}`);
    document.body.addEventListener('click', this.outNavClickHandler.bind(this))
    window.addEventListener('resize', this.windowResizeHandler.bind(this));
    this.navForm.addEventListener('submit', this.formSubmitHandler.bind(this));
  }

  navClickHandler({ target }) {
    if (target.classList.contains(navViewDict.categoryClassName)) {
      this.activateCategory(target);
      const category = target.dataset.category;
      this.categoryClickCb(category.toLowerCase());
    }
  }

  burgerButtonClickHandler() {
    this.navBlock.classList.toggle(navViewDict.burgerActiveClassName);
  }

  outNavClickHandler({target}) {
    if (!target.closest(`.${navViewDict.navClassName}`)) {
      this.deactivateBurger();
    }
  }

  windowResizeHandler() {
    if(window.innerWidth > this.burgerActiveWidth) {
      this.deactivateBurger();
    }
  }

  deactivateBurger() {
    this.navBlock.classList.remove(navViewDict.burgerActiveClassName);
  }

  activateCategory(newActiveCategory) {
    this.categoryList.forEach((category) => {
      category.classList.remove(navViewDict.activeCategoryClassName);
    });
    newActiveCategory.classList.add(navViewDict.activeCategoryClassName);
    this.deactivateBurger();
  }

  formSubmitHandler(e) {
    e.preventDefault();
    const inputValue = e.target.querySelector(`.${navViewDict.formInput}`).value;
    this.categoryClickCb(null, inputValue);
    this.navForm.reset();
  }
}

export default NavigationView;
