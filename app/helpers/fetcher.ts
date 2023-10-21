const getResults = async (url: string) => {
    const result = await fetch(url)
    const data = await result.json();
    return data;
  }

const fetcher = async (url: string) => {
    const res = await getResults(url);
    return res
}

export {fetcher, getResults}
