import { Container, Grid } from "@nextui-org/react";
import { Content } from "./style";
import FormLogin from "../../components/FormLogin";
import ListPosts from "../../components/ListPosts";
import ModalPost from "../../components/Modal";
import { useState } from "react";

export default function Home() {
  const [viewPost, setViewPost] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState({});

  return (
    <Content>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={8} md={8} lg={8} xl={8}>
            <ListPosts setViewPost={setViewPost} setDataModal={setDataModal} />
          </Grid>
          <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
            <FormLogin />
          </Grid>
        </Grid.Container>
      </Container>

      <ModalPost
        viewPost={viewPost}
        setViewPost={setViewPost}
        dataModal={dataModal}
      />
    </Content>
  );
}
