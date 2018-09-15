const formUrl = (url, paramDict) => {
	let params = [];
	for(let d in paramDict) {
		params.push(encodeURIComponent(d) + '=' + encodeURIComponent(paramDict[d]));
	}
	return url + '?' + params.join('&');
};

export class Cryptocompare {
	
	static topCurrencies(symbol = 'USD', limit = 10) {
		const url = 'https://min-api.cryptocompare.com/data/top/totalvol';
		const params = {
			tsym: symbol,
			limit: limit
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
			jsonResponse.Data.forEach(function(curr) {
				curr.CoinInfo.price = parseFloat(curr.ConversionInfo.RAW[0].split('~')[5]);
			});
			return jsonResponse.Data.slice(0, limit);
		});
	}

}