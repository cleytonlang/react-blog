import { Button, Container, Grid, Input, Text } from "@nextui-org/react";
import { useState } from "react";
import { Content, ContentInput } from "./style";
import API from "../../service/api";
import toast from "react-hot-toast";

export default function User() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const user_id = localStorage.getItem("user_id");
  const nameLoad = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  async function updateUser() {
    if (email && (name || password)) {
      const { data } = await API.put(`/user/${user_id}`, {
        name,
        email,
        password,
      });
      if (data) {
        if (name) {
          localStorage.setItem("name", name);
        }

        toast(
          (t) => (
            <Grid.Container gap={2} justify="center">
              <Grid xs={12}>
                <Text color="success" span size={20}>
                  Dados alterados com sucesso.
                </Text>
              </Grid>
            </Grid.Container>
          ),
          {
            duration: 5000,
          }
        );
      }
    }
  }

  return (
    <Content>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} justify="center">
            <h3>Meus dados</h3>
          </Grid>
          <Grid xs={12} justify="center">
            <ContentInput>
              <Text size={20} weight="bold" css={{ marginRight: "10px" }}>
                Email
              </Text>
              <Input
                readOnly
                placeholder="Email"
                initialValue={email ? email : ""}
                disabled
              />
            </ContentInput>
          </Grid>
          <Grid xs={12} justify="center">
            <ContentInput>
              <Text size={20} weight="bold" css={{ marginRight: "10px" }}>
                Nome
              </Text>
              <Input
                placeholder="Nome"
                id="name"
                initialValue={nameLoad ? nameLoad : ""}
                onChange={(event) => setName(event.target.value)}
              />
            </ContentInput>
          </Grid>
          <Grid xs={12} justify="center">
            <ContentInput>
              <Text size={20} weight="bold" css={{ marginRight: "10px" }}>
                Nova senha
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
            <Button shadow color="primary" auto onClick={updateUser}>
              Alterar
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Content>
  );
}
