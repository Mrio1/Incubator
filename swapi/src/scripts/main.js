import "../styles/main.scss";
import NavigationView from "./navView";
import Model from "./dataModel";
import MainFieldView from "./mainFieldView";
import PaginationView from "./paginationView";

class Controller {
  constructor() {
    this.currentCategory = null;
    this.currentPage = null;
    this.isNewCategory = true;
    this.navView = new NavigationView(this.chooseNavCategoryHandler.bind(this));
    this.paginationView = new PaginationView(
      this.getPaginationCount.bind(this)
    );
    this.model = new Model();
    this.mainFieldView = new MainFieldView();
  }

  chooseNavCategoryHandler(category, searchWord) {
    if (!category) {
      if (this.currentCategory) {
        this.searchWord = searchWord;
        this.getCategoryData(this.currentCategory, 1);
        this.currentPage = 1;
      } else {
        alert("Choose category!")
      }
    } else if (this.currentCategory !== category) {
      this.searchWord = null;
      this.isNewCategory = true;
      this.currentCategory = category;
      this.getCategoryData(category, 1);
    }
  }

  getCategoryData(category, pageNumber) {
    let addUrl, pageUrl;
    if (this.searchWord) {
      addUrl = `${this.currentCategory}/?search=${this.searchWord}`
      pageUrl = `&page=${pageNumber}`;
    } else {
      addUrl = category;
      pageUrl = `/?page=${pageNumber}`;
    }
    this.model.getData(
      `${addUrl}${pageUrl}`,
      this.displayCategoryData.bind(this)
    );
  }

  displayCategoryData(data) {
    if (!data) { return }
    const { count, results} = data;
    this.mainFieldView.updateField(results);
    if (this.isNewCategory || this.searchWord) {
      this.paginationView.addPagination(count);
    }
    this.isNewCategory = false;
  }

  getPaginationCount(count) {
    if (this.currentPage !== count) {
      this.getCategoryData(this.currentCategory, count);
      this.currentPage = count;
    }
  }
}

new Controller();
