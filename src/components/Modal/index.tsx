import { Container, Text, Modal, Button } from "@nextui-org/react";

interface IModalProps {
  viewPost?: boolean;
  setViewPost: any;
  dataModal: any;
}

export default function ModalPost({
  viewPost = false,
  setViewPost,
  dataModal,
}: IModalProps) {
  return (
    <Container>
      <Modal
        closeButton
        blur
        width="800px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={viewPost}
        onClose={() => setViewPost(false)}
      >
        <Modal.Header>
          <Text b size={22}>
            {dataModal.title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text span size={16}>
            {dataModal.description}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setViewPost(false)}>
            Fechar post
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
