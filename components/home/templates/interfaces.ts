interface geckoDataObj {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

interface geckoObj {
  read: () => [geckoDataObj];
}

export { geckoDataObj, geckoObj };
