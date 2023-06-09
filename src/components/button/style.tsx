import { styled } from "../../style/stitches.config";

export const StyledButton = styled("button", {
  cursor: "pointer",
  height: "40px",
  fontWeight: "600",
  minWidth: "40px",
  padding: "0 22px",
  borderRadius: "6px",
  border: "none",
  transition: ".5s",
  variants: {
    color: {
      indigo: {
        color: "$indigo12",
        backgroundColor: "$indigo5",
        "&:hover": {
          backgroundColor: "$indigo6",
        },
        "&:focus": {
          backgroundColor: "$indigo7",
        },
      },
      pink: {
        color: "$pink12",
        backgroundColor: "$pink9",
        "&:hover": {
          backgroundColor: "$pink8",
        },
        "&:focus": {
          backgroundColor: "$pink7",
        },
      },
    },
  },
  defaultVariants: {
    color: "indigo",
  },
  "&:disabled": {
    backgroundColor: "Gray",
    cursor: "not-allowed",
    "&:hover": {
      backgroundColor: "Gray",
    },
    "&:focus": {
      backgroundColor: "Gray",
    },
  },
});
