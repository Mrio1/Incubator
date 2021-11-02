import {navView} from './dictionary';

class NavigationView {
  constructor(categoryClickCb) {
    this.navBlock = document.getElementById(navView.navIdName);
    this.categoryList = document.querySelectorAll(navView.categoryClassName);
    this.navBlock.addEventListener("click", this.navClickHandler.bind(this));
    this.categoryClickCb = categoryClickCb;
    this.burgerButton = document.getElementById(navView.burgerId);
    this.burgerActiveWidth = 480;
    this.burgerButton.addEventListener('click', this.burgerButtonClickHandler.bind(this));
    this.navForm = document.querySelector(`.${navView.formClassName}`);
    document.body.addEventListener('click', this.outNavClickHandler.bind(this))
    window.addEventListener('resize', this.windowResizeHandler.bind(this));
    this.navForm.addEventListener('submit', this.formSubmitHandler.bind(this));
  }

  navClickHandler({ target }) {
    if (target.classList.contains(navView.categoryClassName)) {
      this.activateCategory(target);
      const category = target.dataset.category;
      this.categoryClickCb(category.toLowerCase());
    }
  }

  burgerButtonClickHandler() {
    this.navBlock.classList.toggle(navView.burgerActiveClassName);
  }

  outNavClickHandler({target}) {
    if (!target.closest(`.${navView.navClassName}`)) {
      this.deactivateBurger();
    }
  }

  windowResizeHandler() {
    if(window.innerWidth > this.burgerActiveWidth) {
      this.deactivateBurger();
    }
  }

  deactivateBurger() {
    this.navBlock.classList.remove(navView.burgerActiveClassName);
  }

  activateCategory(newActiveCategory) {
    this.categoryList.forEach((category) => {
      category.classList.remove("nav__item--active");
    });
    newActiveCategory.classList.add("nav__item--active");
    this.deactivateBurger();
  }

  formSubmitHandler(e) {
    e.preventDefault();
    const inputValue = e.target.querySelector(`.${navView.formInput}`).value;
    this.categoryClickCb(null, inputValue);
    this.navForm.reset();
  }
}

export default NavigationView;
