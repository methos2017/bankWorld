interface coinDataTypes {
  name?: string | undefined;
  symbol?: string;
  hashing_algorithm?: string;
  description?: { en: string };
  market_cap_rank?: number;
  links?: { homepage: string[] | undefined };
  genesis_date?: string;
}

export { coinDataTypes };
