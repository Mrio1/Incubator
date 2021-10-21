class Model {
  constructor() {
    this.resultVolume = 5;
  }

  async getApiData(addUrl) {
    return await fetch(`https://swapi.dev/api/${addUrl}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  async getData(url, callback) {
    let data = await this.getApiData(url);
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
