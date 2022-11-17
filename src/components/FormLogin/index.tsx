import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Text,
  Container,
  Input,
  Button,
  Radio,
  Link,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import API from "../../service/api";
import imageToast from "../../assets/images/user_add.svg";
import { ContentInput, Logo } from "./style";

export default function FormLogin() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("login");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  async function login() {
    if (email && password) {
      const { data } = await API.post(`/authenticate`, { email, password });
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.token);
      navigate("/posts");
    }
  }

  async function createUser() {
    if (name && email && password) {
      const { data } = await API.post(`/user`, { name, email, password });
      if (data) {
        toast(
          (t) => (
            <Grid.Container gap={2} justify="center">
              <Grid xs={5} justify="center" alignItems="center">
                <Logo src={imageToast} />
              </Grid>
              <Grid xs={7}>
                <Text color="success" span size={20}>
                  Usuário criado com sucesso. Agora você pode fazer login e
                  criar seus posts!
                </Text>
              </Grid>
            </Grid.Container>
          ),
          {
            duration: 10000,
          }
        );

        setType("login");
      }
    }
  }

  return (
    <Container>
      {!token ? (
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <Text span size={20} weight="bold">
              Para postar novos conteúdos faça login ou crie um cadastro aqui.
            </Text>
          </Grid>
          <Grid xs={12} justify="center">
            <Radio.Group
              label=""
              defaultValue={type}
              onChange={setType}
              orientation="horizontal"
            >
              <Radio value="login" color="success" labelColor="success">
                Login
              </Radio>
              <Radio value="create" color="primary" labelColor="primary">
                Cadastrar
              </Radio>
            </Radio.Group>
          </Grid>
          <Grid xs={type === "create" ? 12 : 0} justify="center">
            <ContentInput>
              <Text size={20} weight="bold">
                Nome
              </Text>
              <Input
                placeholder="Nome"
                id="name"
                onChange={(event) => setName(event.target.value)}
              />
            </ContentInput>
          </Grid>
          <Grid xs={12} justify="center">
            <ContentInput>
              <Text size={20} weight="bold">
                Email
              </Text>
              <Input
                placeholder="Email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </ContentInput>
          </Grid>
          <Grid xs={12} justify="center">
            <ContentInput>
              <Text size={20} weight="bold">
                Senha
              </Text>
              <Input
                type="password"
                placeholder="Senha"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </ContentInput>
          </Grid>
          <Grid xs={12} justify="center">
            {type === "login" ? (
              <Button
                shadow
                color="success"
                auto
                css={{ marginRight: "20px" }}
                onPress={login}
              >
                Acessar
              </Button>
            ) : (
              <Button shadow color="primary" auto onPress={createUser}>
                Cadastrar
              </Button>
            )}
          </Grid>
        </Grid.Container>
      ) : (
        <Grid.Container>
          <Grid xs={12}>
            <Text span size={20} weight="bold">
              Você já está logado no blog. <br />
              Para editar seus posts{" "}
              <Link onPress={() => navigate("/posts")}>click aqui</Link>
            </Text>
          </Grid>
        </Grid.Container>
      )}
    </Container>
  );
}
