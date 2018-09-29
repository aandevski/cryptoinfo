export const handleResponse = (response) => {
	if(response.ok) {
		return response.json();
	} else {
		throw new Error('Invalid response!');
	}
}

export const handleError = (error) => {
	console.error(error)
}

export const formUrl = (url, paramDict) => {
	let params = [];
	for(let d in paramDict) {
		params.push(encodeURIComponent(d) + '=' + encodeURIComponent(paramDict[d]));
	}
	return url + '?' + params.join('&');
};

export const parseUnixDate = (unixTimestamp) => {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const date = new Date(unixTimestamp*1000);
	return months[date.getMonth()] + " " + date.getDate();
}