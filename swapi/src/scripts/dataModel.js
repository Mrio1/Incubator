class Model {
  constructor() {
    this.resultVolume = 5;
    this.storage = localStorage.getItem('swapi');
    this.localData = JSON.parse(localStorage.getItem('swapi'));
    if(!this.localData) {
      this.localData = {};
      this.updateLocalData();
    }
  }

  updateLocalData() {
    localStorage.setItem('swapi', JSON.stringify(this.localData));
  }

  async getApiData(addUrl) {
    return await fetch(`https://swapi.dev/api/${addUrl}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  async getData(url, callback) {
    let data = this.localData[url];
    if (!data) {
      data = await this.getApiData(url);
      Object.assign(this.localData, {[url]: data});
      console.log(this.localData)
      this.updateLocalData();
    }
    const formatedData = this.formatData(data);
    callback(formatedData);
  }

  formatData(data) {
    const results = data.results.map((result) => {
      const keys = Object.keys(result).slice(0, this.resultVolume);
      let formatedObj = {};
      keys.forEach(key => {
        formatedObj[key] = result[key];
      });
      return formatedObj;
    });
    return {
      count: data.count,
      results
    };
  };
}

export default Model;
