import { Stitches } from "../../assets/styles/stitches";

export const Content = Stitches.styled("div", {
  "& div": {
    background: "#1E90FF",
  },

  "& div div div": {
    minHeight: "300px",
  },
});

export const Logo = Stitches.styled("img", {
  width: "60px",
  marginRight: "10px",
});

export const Image = Stitches.styled("img", {
  width: "500px",
  minWidth: "250px",
  padding: "80px",
});

export const TextHeader = Stitches.styled("div", {
  display: "grid",
  justifySelf: "center",
  alignSelf: "center",
});
