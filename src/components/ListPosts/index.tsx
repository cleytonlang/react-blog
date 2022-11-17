import {
  Container,
  Grid,
  Text,
  Row,
  Card,
  Badge,
  Link,
  Button,
  Popover,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import API from "../../service/api";
import { useEffect, useState } from "react";
import { GrLike, GrEdit, GrFormView, GrTrash } from "react-icons/gr";
import { BtnPosts, BtnViewPosts, Alert } from "./style";

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

  async function deletePost(id: string) {
    await API.put(`/post/${id}`, {
      deleted: true,
    });
    listPosts();
    toast.success("Post excluído com sucesso!", {
      duration: 5000,
    });
  }

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <Container>
      <h3>Posts</h3>
      {dataPosts && dataPosts.length ? (
        dataPosts.map((post: any, index: number) => (
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
                      <Popover placement="right">
                        <Popover.Trigger>
                          <Button css={{ background: "transparent" }} auto flat>
                            <GrTrash size={25} />
                          </Button>
                        </Popover.Trigger>
                        <Popover.Content>
                          <Grid.Container
                            css={{
                              borderRadius: "14px",
                              padding: "0.75rem",
                              maxWidth: "330px",
                              backgroundColor: "#F0F8FF",
                              border: "1px solid #cccccc",
                            }}
                          >
                            <Row justify="center" align="center">
                              <Text b>Confirmação</Text>
                            </Row>
                            <Row>
                              <Text>
                                Tem certeza que deseja excluir o post?
                              </Text>
                            </Row>
                            <Grid.Container
                              justify="center"
                              alignContent="center"
                              css={{ marginTop: "20px" }}
                            >
                              <Grid justify="center">
                                <Button
                                  size="sm"
                                  shadow
                                  color="error"
                                  onPress={() => deletePost(post.id)}
                                >
                                  Confirmar
                                </Button>
                              </Grid>
                            </Grid.Container>
                          </Grid.Container>
                        </Popover.Content>
                      </Popover>
                    </BtnPosts>
                  </>
                ) : null}
              </Card.Footer>
            </Card>
          </Row>
        ))
      ) : (
        <Alert>Nenhum post cadastrado</Alert>
      )}
    </Container>
  );
}
