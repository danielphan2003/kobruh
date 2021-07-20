export default async function api(fetch: Function, url: string): Promise<any> {
  let res = await fetch(url);
  // Response status 429: Too many request
  // Retry if failed.
  while (res.status == 429) {
    res = await fetch(url);
  }
  return await res.json();
}