import { ContentInput } from "./style";
import { Container, Grid, Text, Row, Input, Button } from "@nextui-org/react";
export default function FormLogin() {
  return (
    <Container>
      <Row justify="center" align="center">
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
            <Grid.Container gap={2}>
              <Grid xs={12} justify="center">
                <Text h1 size={25} weight="bold">
                  Acesso
                </Text>
              </Grid>
              <Grid xs={12} justify="center">
                <ContentInput>
                  <Text size={20} weight="bold">
                    Usuário
                  </Text>
                  <Input placeholder="Usuário" />
                </ContentInput>
              </Grid>
              <Grid xs={12} justify="center">
                <ContentInput>
                  <Text size={20} weight="bold">
                    Senha
                  </Text>
                  <Input type="password" placeholder="Senha" />
                </ContentInput>
              </Grid>
              <Grid xs={12} justify="center">
                <Button
                  shadow
                  color="success"
                  auto
                  css={{ marginRight: "20px" }}
                >
                  Acessar
                </Button>
                <Button shadow color="primary" auto>
                  Cadastrar
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  );
}
