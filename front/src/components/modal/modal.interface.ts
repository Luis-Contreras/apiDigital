export interface ModalInterface {
  open: boolean;
  setOpen: (e: boolean) => void;
  title: string;
  content: JSX.Element | JSX.Element[];
  action: () => void;
  setFormData: any;
}
