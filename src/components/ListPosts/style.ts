import { Stitches } from "../../assets/styles/stitches";

export const BtnViewPosts = Stitches.styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "35px",
  padding: "5px",
  backgroundColor: "$white",
  border: "1px solid $gray70",
  borderRadius: "10px",
  marginRight: "15px",
});

export const BtnPosts = Stitches.styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "35px",
  padding: "5px",
  backgroundColor: "$blue70",
  border: "1px solid $gray70",
  borderRadius: "10px",
  cursor: "pointer",
  marginRight: "15px",

  "&:hover": {
    backgroundColor: "$white",
  },
});

export const Alert = Stitches.styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$blue70",
  border: "1px solid $gray70",
  borderRadius: "10px",
  padding: "30px",
});
