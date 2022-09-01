export interface HeaderProps {
  headerText: string | undefined;
  headerImage: {
    id?: number;
    image: string;
    img_description: string;
    category?: string;
  };
}
