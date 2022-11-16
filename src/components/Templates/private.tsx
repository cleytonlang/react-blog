import { ReactElement } from "react";
import { Navbar, Button, Text, Container } from "@nextui-org/react";
import logo from "../../images/logo.png";
import { Logo } from "./style";

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
    </Container>
  );
}
