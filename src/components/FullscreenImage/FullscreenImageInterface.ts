export interface FullscreenProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  imageId: number | null;
}
