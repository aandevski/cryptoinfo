import {handleResponse, handleError, formUrl} from './helpers'

export class Cryptocompare {
	
	static topCurrencies(symbol = 'USD', limit = 10) {
		const url = 'https://min-api.cryptocompare.com/data/top/totalvol';
		const params = {
			tsym: symbol,
			limit: limit
		};
		const endpoint = formUrl(url, params);

		return fetch(endpoint).then(handleResponse).then(jsonResponse => {
			jsonResponse.Data.forEach(function(curr) {
				curr.CoinInfo.price = parseFloat(curr.ConversionInfo.RAW[0].split('~')[5]);
			});
			if(limit === 0) {
				return jsonResponse
			}
			return jsonResponse.Data.slice(0, limit);
		}).catch(handleError)
	}

	static latestNews() {
		const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';

		return fetch(url).then(handleResponse).then(jsonResponse => {
			return jsonResponse.Data;
		}).catch(handleError)
	}

	static getRate(fsym, tsym) {

		// console.log(fsym, tsym)

		const url = 'https://min-api.cryptocompare.com/data/price'
		const params = {
			fsym: fsym,
			tsyms: tsym
		}
		const endpoint=formUrl(url, params)

		return fetch(endpoint).then(handleResponse).then((data) => {
			console.log(data)
			return data[tsym]
		}).catch(handleError)

	}

	static getCurrencyDetails(symbol) {
		return this.topCurrencies('USD', 1000).then(data => {
			for(let i = 0; i<data.length; i++) {
				if(data[i].CoinInfo.Name === symbol) {
					return data[i].CoinInfo
				}
			}

		})
	} 

	static getAllCurrencyNames() {
		return this.topCurrencies('USD', 1000).then(data => {

			let result = []
			for(let i = 0; i<data.length; i++) {
				result.push(data[i].CoinInfo.Name)
			}

			return result
		})
	}

	static getHistoricalData(symbol) {
		const url = 'https://min-api.cryptocompare.com/data/histoday'
		const params = {
			fsym: symbol,
			tsym: 'USD',
			limit: 90
		}
		const endpoint = formUrl(url, params)
		return fetch(endpoint).then(handleResponse).then((data) => {
			data = data.Data
			return data
		}).catch(handleError)
	}
}