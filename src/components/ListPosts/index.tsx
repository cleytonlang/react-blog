import {
  Container,
  Grid,
  Text,
  Row,
  Card,
  Badge,
  Link,
} from "@nextui-org/react";
import API from "../../service/api";
import { useEffect, useState } from "react";
import { GrLike, GrEdit, GrFormView, GrTrash } from "react-icons/gr";
import { BtnPosts, BtnViewPosts } from "./style";

interface IPostProps {
  title: string;
  description: string;
}

interface IFilterProps {
  filter?: string;
  setViewPost: any;
  setDataModal: any;
}

export default function ListPosts({
  filter = "",
  setViewPost,
  setDataModal,
}: IFilterProps) {
  const [dataPosts, setDataPosts] = useState<IPostProps[]>([]);
  const user_id = localStorage.getItem("user_id");

  async function listPosts() {
    const { data } = await API.get(`/post/${filter}`);
    setDataPosts(data);
  }

  function partDescription(description: string) {
    return description.substring(0, 230) + " ...";
  }

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <Container>
      <h3>Posts</h3>
      {dataPosts && dataPosts.length
        ? dataPosts.map((post: any, index: number) => (
            <Row key={index}>
              <Card isHoverable css={{ p: "$2", marginTop: "20px" }}>
                <Card.Body>
                  <Link
                    color="text"
                    underline
                    onPress={() => {
                      setViewPost(true);
                      setDataModal(post);
                    }}
                  >
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          {post.title}
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>
                          {partDescription(post.description)}
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Link>
                </Card.Body>

                <Card.Footer>
                  <BtnViewPosts>
                    <Badge
                      color="success"
                      content={37}
                      shape="rectangle"
                      size="sm"
                    >
                      <GrFormView size={25} />
                    </Badge>
                  </BtnViewPosts>

                  {!filter && (
                    <BtnPosts>
                      <Badge
                        color="primary"
                        content={5}
                        shape="rectangle"
                        size="sm"
                      >
                        <GrLike size={25} />
                      </Badge>
                    </BtnPosts>
                  )}

                  {post.user_id === user_id ? (
                    <>
                      <BtnPosts>
                        <GrEdit size={25} />
                      </BtnPosts>

                      <BtnPosts>
                        <GrTrash size={25} />
                      </BtnPosts>
                    </>
                  ) : null}
                </Card.Footer>
              </Card>
            </Row>
          ))
        : null}
    </Container>
  );
}
