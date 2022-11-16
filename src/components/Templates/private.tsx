import { ReactElement } from "react";
import { Navbar, Button, Text, Container, Grid } from "@nextui-org/react";
import logo from "../../images/logo.png";
import { Logo, Footer } from "./style";

type TemplateProps = {
  children: ReactElement;
};

export default function PrivateTemplate({ children }: TemplateProps) {
  return (
    <Container xl>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Logo src={logo} />
          <Text h2 weight="bold" color="inherit" hideIn="xs">
            TaskToday
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Minhas tarefas</Navbar.Link>
          <Navbar.Link href="#">Criar nova tarefa</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat href="./">
              Sair
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <div>{children}</div>

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
    </Container>
  );
}
