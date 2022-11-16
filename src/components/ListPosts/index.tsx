import { Container, Grid, Text, Row, Card, Link } from "@nextui-org/react";
import API from "../../service/api";
import { useEffect, useState } from "react";
import { ContentInput } from "./style";

interface IPostProps {
  title: string;
  description: string;
}

export default function ListPosts() {
  const [dataPosts, setDataPosts] = useState<IPostProps[]>([]);

  async function listPosts() {
    const { data } = await API.get(`/post`);
    setDataPosts(data);
  }

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <Container>
      <h3>Posts</h3>
      {dataPosts && dataPosts.length
        ? dataPosts.map((post: any) => (
            <Row>
              <Card css={{ p: "$2", marginTop: "20px" }}>
                <Card.Body>
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        {post.title}
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>
                        {post.description}
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Body>

                <Card.Footer>
                  <Link color="primary" target="_blank" href="#">
                    Curtir
                  </Link>
                </Card.Footer>
              </Card>
            </Row>
          ))
        : null}
    </Container>
  );
}
