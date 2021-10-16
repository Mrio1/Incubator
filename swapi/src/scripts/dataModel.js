class Model {
    constructor() {
		this.resultVolume = 5;
    }

    async getApiData(addUrl) {
    	let apiData = await fetch(`https://swapi.dev/api/${addUrl}`)
			.then((response) => 
				response.json()
			)
			.catch(()=> {
				console.log("ERRRROR")
			})
    	return apiData
    }

    async getData(url, callback) {
		console.log(url)
      	let data = await this.getApiData(url);
		const formatedData = this.formatData(data);
    	callback(formatedData);
    }

	formatData(data) {
		const results = data.results.map(result => {
			const keys = Object.keys(result).slice(0, this.resultVolume);
			const newObj = {};
			keys.forEach(key => {
				newObj[key] = result[key]
			})
			return newObj
		})
		return {
			count: data.count,
			results: results
		}
	}
}

export default Model;
