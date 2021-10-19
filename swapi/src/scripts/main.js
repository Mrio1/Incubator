import "../styles/main.scss";
import NavigationView from "./navView";
import Model from "./dataModel";
import MainFieldView from "./mainFieldView";
import PaginationView from "./paginationView";


//model.getPeopleData(chooseNavCategory)
class Controller {
    constructor() {
        this.currentCategory = null;
        this.currentPage = null;
        this.isNewCategory = true;
        this.init();
    }

    init() {
        this.navView = new NavigationView(this.chooseNavCategoryHandler.bind(this));
        this.paginationView = new PaginationView(this.getPaginationCount.bind(this));
        this.model = new Model();
        this.mainFieldView = new MainFieldView();
    }

    chooseNavCategoryHandler(category) {
        if (this.currentCategory != category) {
            this.isNewCategory = true;
            this.currentCategory = category;
            this.getCategoryData();
            this.currentPage = 1;
        }
    }

    getCategoryData(pageNumber) {
        const pageUrl = (pageNumber) ? `?page=${pageNumber}` : '';
        this.model.getData(
            `${this.currentCategory}/${pageUrl}`, 
            this.displayCategoryData.bind(this)
        ) 
    }

    displayCategoryData({count, results}) {
        this.mainFieldView.updateField(results);
        if (this.isNewCategory) {
            this.paginationView.addPagination(count);
        }
        this.isNewCategory = false;
    }

    getPaginationCount(count) {
        if (this.currentPage != count) {
            this.getCategoryData(count)
            this.currentPage = count;
        }
    }
}

new Controller();
