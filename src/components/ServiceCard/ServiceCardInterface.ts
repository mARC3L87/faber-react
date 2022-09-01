interface Items {
  id: number;
  image: string;
  img_description: string;
  category: string;
}
export interface ServiceCardProps {
  items: Items[];
  serviceCategory: {
    id: number;
    service: string;
  };
}
