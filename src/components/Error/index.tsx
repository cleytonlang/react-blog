import { Container, Card, Row, Text } from "@nextui-org/react";
import { Navigate } from "react-router-dom";

export default function Error() {
  return (
    <Container css={{ marginTop: "20px" }}>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h3>Page not found.</Text>
          </Row>
        </Card.Body>
      </Card>
      <Navigate to="/" replace={true} />
    </Container>
  );
}
