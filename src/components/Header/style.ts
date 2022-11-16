import { styled } from "@stitches/react";

export const Content = styled("div", {
  "& div": {
    background: "#1E90FF",
  },

  "& div div div": {
    minHeight: "300px",
  },
});

export const Logo = styled("img", {
  width: "60px",
  marginRight: "10px",
});

export const Image = styled("img", {
  width: "500px",
  minWidth: "250px",
  padding: "80px",
});

export const TextHeader = styled("div", {
  display: "grid",
  justifySelf: "center",
  alignSelf: "center",
});
