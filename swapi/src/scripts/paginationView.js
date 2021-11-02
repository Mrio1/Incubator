import "../styles/pagination.scss";
import {paginationViewDict} from './dictionary';

class PaginationView {
  constructor(clickCallback) {
    this.clickCallback = clickCallback;
    this.parentArea = document.querySelector(".app__pagination");
    this.parentArea.addEventListener(
      "click",
      this.parentClickHandler.bind(this)
    );
    this.displayItemsNumber = 10;
  }

  addPagination(number) {
    this.totalPagesCount = Math.ceil(number / this.displayItemsNumber);
    this.parentArea.innerHTML = "";
    for (let i = 1; i <= this.totalPagesCount; i++) {
      this.parentArea.append(this.addItem(i));
    }
    this.paginationitemList = document.querySelectorAll(".pagination__item");
    this.parentArea.addEventListener(
      "click",
      this.parentClickHandler.bind(this)
    );
    this.activateItem();
  }

  addItem(number) {
    const item = document.createElement("li");
    item.className = "pagination__item";
    item.dataset.count = number;
    item.innerHTML = number;
    return item;
  }

  parentClickHandler({ target }) {
    if (target.classList.contains("pagination__item")) {
      this.activateItem(target);
      const count = target.dataset.count;
      this.clickCallback(count);
    }
  }

  activateItem(target) {
    this.paginationitemList.forEach((item) => {
      item.classList.remove("pagination__item--active");
    });
    if (!target) {
      target = this.paginationitemList[0];
    }
    target.classList.add("pagination__item--active");
  }
}

export default PaginationView;
