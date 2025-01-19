export function generateURL(url, pathParams = {}, queryParams = {}) {
    const formattedUrl = Object.keys(pathParams).reduce(
        (currentUrl, param) => currentUrl.replace(`:${param}`, encodeURIComponent(pathParams[param])),
        url
    );

    const queryString = Object.keys(queryParams)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join("&");

    return queryString ? `${formattedUrl}?${queryString}` : formattedUrl;
}
