export interface Address {
  phone: string;
  email: string;
  city: string;
  postal: string;
  street: string;
}
export interface IntroContent {
  introTitle: string;
  introText: string;
}
export interface OfferContent {
  offerTitle: string;
  offerText: string;
}
export interface Items {
  id: number;
  image: string;
  img_description: string;
  category: string;
}
export interface ServiceCategories {
  id: number;
  service: string;
}
export interface Data {
  status: 'idle' | 'loading' | 'failed';
  address: Address;
  map: string;
  introContent: IntroContent;
  offerContent: OfferContent;
  headers: string[];
  serviceCategories: ServiceCategories[];
  items: Items[];
  loadedGallery: Items[] | null;
}
