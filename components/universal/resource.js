// async function fetchPosts(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

function wrapPromise(promise) {
  let status = "loading";
  let result;
  let suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

// export default function createResource() {
// 	return {
// 		markets: wrapPromise(fetchPosts("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")),
// 		coin: ()=>wrapPromise(fetchPosts('https://api.coingecko.com/api/v3/coins/bitcoin')),
// 		// coin: getRes(fetchPosts)
// 	}
// }
//
export default function createResource(fn) {
  const cache = {};
  return {
    read(id) {
      const data = cache[id];
      if (!data) {
        const promise = fn(id).then((p) => (cache[id] = p));
        throw promise;
      }
      return data;
    },
  };
}
