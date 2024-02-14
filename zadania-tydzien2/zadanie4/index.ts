export async function spanko(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function malpiFetch(method: string, url: string): Promise<object> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.send();
  });
}

export async function fetchWithTimeout(
  url: string,
  timeout: number
): Promise<object> {
  const data = await malpiFetch("GET", url);

  await spanko(timeout);

  return data;
}
