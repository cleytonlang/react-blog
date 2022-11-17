import { Logo, FooterContent } from "./style";
import logo from "../../assets/images/logo.png";
import { Container, Grid } from "@nextui-org/react";
export default function Footer() {
  return (
    <Container fluid>
      <FooterContent>
        <Grid.Container>
          <Grid xs={12} justify="center" alignItems="center">
            <Logo src={logo} />
            QuikBlog
          </Grid>
        </Grid.Container>
      </FooterContent>
    </Container>
  );
}
