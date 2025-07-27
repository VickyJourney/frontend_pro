export function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error");
    }

    return response.json();
  });
}
