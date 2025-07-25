export interface CardProps {}

export interface ButtonProps {}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offer {
  bed: string;
  shower: string;
  occupants: string;
}
export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offer;
  image: string;
  discount: string;
}

export interface AccommodationTypes {
  id?: number;
  name: string;
  image: string;
}

export interface PillProps {
  title: string;
}
