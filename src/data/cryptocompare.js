const formUrl = (url, paramDict) => {
	let params = [];
	for(let d in paramDict) {
		params.push(encodeURIComponent(d) + '=' + encodeURIComponent(paramDict[d]));
	}
	return url + '?' + params.join('&');
};

export class Cryptocompare {
	
	static topCurrencies(page = 0, symbol = 'USD', limit = 10) {
		const url = 'https://min-api.cryptocompare.com/data/top/totalvol';
		const params = {
			tsym: symbol,
			page: page
		};
		const endpoint = formUrl(url, params);

		return fetch(endpoint).then(response => {
			if(response.ok) {
				return response.json();
			} else {
				throw new Error('Invalid response!');
			}
		}, errorMsg => {
			console.log(errorMsg);
		}).then(jsonResponse => {
			return jsonResponse.Data.slice(0, limit);
		});
	}

}