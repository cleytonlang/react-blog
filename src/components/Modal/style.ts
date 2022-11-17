import { Stitches } from "../../assets/styles/stitches";

export const BtnViewPosts = Stitches.styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "35px",
  padding: "5px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #eeeeee",
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
  backgroundColor: "#F0F8FF",
  border: "1px solid #eeeeee",
  borderRadius: "10px",
  cursor: "pointer",
  marginRight: "15px",

  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});
