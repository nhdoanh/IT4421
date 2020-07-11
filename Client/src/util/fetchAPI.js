const fetchTimeOut = (promise) => {
    const timeout = new Promise(resolve => {
        const id = setTimeout(() => {
            clearTimeout(id);
            resolve(new Error("Request Timeout"));
        }, 10000);
    });
    return Promise.race([promise, timeout]);
};

const buildFormBody = (data, pojoName) => {
    const formBody = Object.keys(data).map(property => {
      const encodedKey = encodeURIComponent(pojoName ? `${pojoName}.${property}` : property);
      const value = data[property]
      const needStringify = typeof value === 'object' || Array.isArray(value)
      const stringifyValue = needStringify ? JSON.stringify(value) : value
      const encodedValue = encodeURIComponent(stringifyValue);
      return `${encodedKey}=${encodedValue}`;
    })
    return formBody.join("&");
};

const fetchAPI = ({ url, body = {}, method = "POST", pojoName}) => 
fetchTimeOut(
    fetch(url, {
        method,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8;",
        },
        body: buildFormBody(body, pojoName),
    })
    .then(res => res.json())
    .catch(err => err),
);