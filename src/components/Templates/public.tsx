import { ReactElement } from "react";
import { Content } from "./style";
import Header from "../Header";
import Footer from "../Footer";

type TemplateProps = {
  children: ReactElement;
};

export default function PublicTemplate({ children }: TemplateProps) {
  return (
    <Content>
      <Header />
      {children}
      <Footer />
    </Content>
  );
}
