const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7; //일주일 전
  // return fetch(
  //   `${BASE_URL}/coins/${coinId}/ohlcv/historical?=${startDate}&end=${endDate}`
  // ).then((response) => response.json());
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/today`).then((response) =>
    response.json()
  );
}
