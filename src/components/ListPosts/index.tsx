import { Container, Grid, Text, Row, Card, Link } from "@nextui-org/react";
import API from "../../service/api";
import { useEffect, useState } from "react";
import { ContentInput } from "./style";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  async function listPosts() {
    const { data } = await API.get(`/post`);
    setPosts(data);
  }

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <Container>
      sdfskj hjk
      <Row>
        {posts &&
          posts.map((post: any) => (
            <Card css={{ p: "$2", marginTop: "20px" }}>
              <Card.Body>
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      {post.title}
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>{post.description}</Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>

              <Card.Footer>
                <Link color="primary" target="_blank" href="#">
                  Curtir
                </Link>
              </Card.Footer>
            </Card>
          ))}
      </Row>
    </Container>
  );
}
