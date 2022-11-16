import { Container, Grid } from "@nextui-org/react";
import { Content } from "./style";
import Header from "../../components/Header";
import FormLogin from "../../components/FormLogin";
import ListPosts from "../../components/ListPosts";

export default function Home() {
  return (
    <Content>
      <Header />
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={8} md={8} lg={8} xl={8}>
            <ListPosts />
          </Grid>
          <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
            <FormLogin />
          </Grid>
        </Grid.Container>
      </Container>
    </Content>
  );
}
