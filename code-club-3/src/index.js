export default {
	async fetch(request) {
	  /**
	   * A map of the URLs to redirect to
	   * @param {Object} countryMap
	   */
	  const countryMap = {
		US: "https://example.com/us",
		EU: "https://example.com/eu",
	  };
  
	  // Use the cf object to obtain the country of the request
	  // more on the cf object: https://developers.cloudflare.com/workers/runtime-apis/request#incomingrequestcfproperties
	  const country = request.cf.country;
  
	  if (country != null && country in countryMap) {
		const url = countryMap[country];
		// Remove this logging statement from your final output.
		console.log(`Based on ${country}-based request, your user would go to ${url}.` )
		return Response.redirect(url);
	  } else {
		return fetch("https://example.com", request);
	  }
	},
  };