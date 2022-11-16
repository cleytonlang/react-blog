import { ReactElement } from "react";
import { Content } from "./style";
type TemplateProps = {
  children: ReactElement;
};

export default function PublicTemplate({ children }: TemplateProps) {
  return <Content>{children}</Content>;
}
