import { Container, Grid } from "@nextui-org/react";
import { Content } from "./style";
import ListPosts from "../../components/ListPosts";
import ModalPost from "../../components/Modal";
import { useState } from "react";

export default function Post() {
  const [viewPost, setViewPost] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState({});

  return (
    <Content>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListPosts
              filter="filter"
              setViewPost={setViewPost}
              setDataModal={setDataModal}
            />
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
