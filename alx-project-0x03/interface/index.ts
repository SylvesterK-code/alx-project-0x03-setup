// interface/index.ts

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action: () => void;
  buttonSize?: "small" | "medium" | "large";
}

export interface LayoutProps {
  children: React.ReactNode;
}

