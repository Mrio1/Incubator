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
      this.updateLocalData();
    }
    const formatedData = this.formatData(data);
    callback(formatedData);
  }

  formatData({results, count}) {
    const data = results.map(dataItem => 
      Object.entries(dataItem).filter((item, index) => {
        return index < this.resultVolume;
      }
    )).map(item => {
      return Object.fromEntries([...item]);
    });
    return {
      count,
      results: data
    };
  };
}

export default Model;
