import { Stitches } from "../../assets/styles/stitches";

export const Content = Stitches.styled("div", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});
