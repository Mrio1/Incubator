import "../styles/mainField.scss";

class MainFieldView {
  constructor() {
    this.currentActiveCard = null;
    this.activateArr = [];
    this.parentField = document.querySelector(".cards");
    this.parentField.addEventListener("click", this.clickHandler.bind(this));
  }

  updateField(data) {
    this.parentField.innerHTML = "";
    data.forEach((itemData) => {
      this.addItem(itemData);
    });
  }

  addItem(data) {
    const item = document.createElement("li");
    item.className = "cards__item card";
    const fieldNames = Object.keys(data).slice(0);
    let titleHtml = `
            <h3 class="card__title">${data[fieldNames[0]]}</h3>            
        `;
    let contentHtml = "";
    fieldNames.slice(1).forEach((name) => {
      contentHtml += `<p class="card__text"><span class="card__text--capitalize">${name.replaceAll(
        "_",
        " "
      )}</span>: ${data[name]}</p>`;
    });
    item.innerHTML = `
            ${titleHtml}
            <div class="card__content-container">
                ${contentHtml}
            </div>
        `;
    this.parentField.append(item);
  }

  clickHandler({ target }) {
    const card = target.closest(".card");
    if (!card || card === this.currentActiveCard) {
      return;
    }
    if (this.currentActiveCard) {
      this.deactivateCard();
    }
    this.currentActiveCard = card;
    this.activateCard();
  }

  activateCard() {
    this.currentActiveCard.classList.add("card--active");
    const textList = this.currentActiveCard.querySelectorAll(".card__text");
    let animationCounter = 0;
    textList.forEach((textItem) => {
      setTimeout(() => {
        textItem.classList.add("card__text--active");
      }, 300 * animationCounter++);
    });
  }

  deactivateCard() {
    this.currentActiveCard.classList.remove("card--active");
    this.currentActiveCard
      .querySelectorAll(".card__text")
      .forEach((cardText) => {
        cardText.classList.remove("card__text--active");
      });
    this.isElementDeactivate = true;
  }
}

export default MainFieldView;
