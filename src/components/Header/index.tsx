import { Logo, Image, TextHeader, Content } from "./style";
import image from "../../assets/images/blog.svg";
import logo from "../../assets/images/logo.png";
import { Grid, Text, Row } from "@nextui-org/react";
export default function Header() {
  return (
    <Content>
      <Row justify="center" align="center">
        <Grid.Container>
          <Grid xs justify="center">
            <TextHeader>
              <Text
                h1
                size={70}
                css={{
                  color: "#fcfcfc",
                }}
              >
                <Logo src={logo} />
                QuikBlog
              </Text>
              <Text
                css={{
                  color: "#fcfcfc",
                }}
                h1
                size={30}
                weight="bold"
              >
                Olá <span>{localStorage.getItem("name")}</span>, Crie seu blog e
                replique seu <br />
                conhecimento para seu público
              </Text>
            </TextHeader>
          </Grid>
          <Grid xs={0} sm={5} md={5} lg={5} xl={5}>
            <Image src={image} />
          </Grid>
        </Grid.Container>
      </Row>
    </Content>
  );
}
