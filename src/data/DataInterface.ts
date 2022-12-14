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
interface Fields {
  username: boolean;
  subject: boolean;
  message: boolean;
  email: boolean;
}
export interface Message {
  type: string;
  msg: string;
}

export interface Data {
  status: 'idle' | 'loading' | 'failed';
  loading: boolean;
  address: Address;
  map: string;
  introContent: IntroContent;
  offerContent: OfferContent;
  headers: string[];
  serviceCategories: ServiceCategories[];
  items: Items[];
  loadedGallery: Items[] | null;
  alerts: Fields;
  message: Message;
}
