import { Container, Grid } from "@nextui-org/react";
import { ReactElement } from "react";
import logo from "../../assets/images/logo.png";
import { Content, Logo, Footer } from "./style";

type TemplateProps = {
  children: ReactElement;
};

export default function PublicTemplate({ children }: TemplateProps) {
  return (
    <Content>
      {children}
      <Container fluid>
        <Footer>
          <Grid.Container>
            <Grid xs={12} justify="center" alignItems="center">
              <Logo src={logo} />
              QuikBlog
            </Grid>
          </Grid.Container>
        </Footer>
      </Container>
    </Content>
  );
}
