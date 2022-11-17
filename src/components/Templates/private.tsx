import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Button } from "@nextui-org/react";
import logo from "../../assets/images/logo.png";
import { Content, Logo } from "./style";
import Header from "../Header";
import Footer from "../Footer";

type TemplateProps = {
  children: ReactElement;
};

export default function PrivateTemplate({ children }: TemplateProps) {
  const navigate = useNavigate();

  function logoff() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Content>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Logo src={logo} />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link onPress={() => navigate("/posts")}>
            Meus posts
          </Navbar.Link>
          <Navbar.Link onPress={() => navigate("/user")}>
            Meus dados
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat onPress={logoff}>
              Sair
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Header />

      <div>{children}</div>

      <Footer />
    </Content>
  );
}
