export interface ButtonInterface {
  children: JSX.Element | string;
  variant?: variant;
  color?: color;
  disabled?: boolean;
  onClick: () => void;
}

type variant = "text" | "outlined" | "contained";

type color = "primary" | "secondary";
