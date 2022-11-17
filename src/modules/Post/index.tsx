import { Container, Grid } from "@nextui-org/react";
import { Content } from "./style";
import ListPosts from "../../components/ListPosts";

export default function Post() {
  return (
    <Content>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListPosts />
          </Grid>
          <Grid xs={12} sm={4} md={4} lg={4} xl={4}></Grid>
        </Grid.Container>
      </Container>
    </Content>
  );
}
