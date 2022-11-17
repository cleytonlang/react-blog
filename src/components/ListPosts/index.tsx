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
  id: string;
  title: string;
  description: string;
  view?: number;
  like?: number;
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
  const [dataPostsWithCounters, setDataPostsWithCounters] = useState<
    IPostProps[]
  >([]);
  const user_id = localStorage.getItem("user_id");

  async function listPosts() {
    const { data } = await API.get(`/post/${filter}`);
    setDataPosts(data);
  }

  function partDescription(description: string) {
    return description.substring(0, 230) + " ...";
  }

  async function createView(id: string) {
    await API.post(`/post/view`, {
      post_id: id,
    });
    listPosts();
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

  async function countViews(ids: string[]) {
    const { data } = await API.patch(`/post/view`, { ids });
    let newDataPosts: IPostProps[] = dataPosts;
    if (data.length) {
      newDataPosts = dataPosts.map((post: IPostProps) => {
        const filterCount = data.filter(
          (postCount: any) => postCount.post_id === post.id
        );
        post.view = filterCount.length ? filterCount[0]._count.post_id : 0;
        return post;
      });
      setDataPostsWithCounters(newDataPosts);
    }
    return newDataPosts;
  }

  async function countLikes(ids: string[], newDataPosts: IPostProps[]) {
    const { data } = await API.patch(`/post/like`, { ids });
    if (data.length) {
      const newDataPostsLikes = newDataPosts.map((post: IPostProps) => {
        const filterCount = data.filter(
          (postCount: any) => postCount.post_id === post.id
        );
        post.like = filterCount.length ? filterCount[0]._count.post_id : 0;
        return post;
      });
      setDataPostsWithCounters(newDataPostsLikes);
    }
  }

  async function createLike(id: string) {
    await API.post(`/post/like`, {
      post_id: id,
    });
    listPosts();
  }

  useEffect(() => {
    async function fetchPostsData() {
      const ids = dataPosts.map((post: IPostProps) => post.id);
      const newDataPosts = await countViews(ids);
      await countLikes(ids, newDataPosts);
    }

    fetchPostsData();
  }, [dataPosts]);

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <Container>
      <h3>Posts</h3>
      {dataPostsWithCounters && dataPostsWithCounters.length ? (
        dataPostsWithCounters.map((post: any, index: number) => (
          <Row key={index}>
            <Card isHoverable css={{ p: "$2", marginTop: "20px" }}>
              <Card.Body>
                <Link
                  color="text"
                  underline
                  onClick={() => {
                    setViewPost(true);
                    setDataModal(post);
                    createView(post.id);
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
                    content={post.view}
                    shape="rectangle"
                    size="sm"
                  >
                    <GrFormView size={25} />
                  </Badge>
                </BtnViewPosts>

                {!filter && (
                  <BtnPosts onClick={() => createLike(post.id)}>
                    <Badge
                      color="primary"
                      content={post.like}
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
                                  onClick={() => deletePost(post.id)}
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
        <Alert>Nenhum post cadastrado!</Alert>
      )}
    </Container>
  );
}
