interface Address {
  name: string;
  country: string;
  state: string;
}

interface AutoCompleteResult {
  address: Address;
}

export type AutoCompleteResponse = Array<AutoCompleteResult>;
