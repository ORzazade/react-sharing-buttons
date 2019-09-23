import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "#888",
    fontSize: "16px",
    lineHeight: "27px",
    "&:hover $shareButtons": {
      opacity: 1,
      transform: "translate(0)"
    }
  },
  shareIcon: {
    background: "#fafafa"
  },
  content: {
    display: "inline-block",
    position: "relative",
    width: "calc(100% - 60px)",
    "& span": {
      marginLeft: "10px",
      color: "#888",
      cursor: "default",
      padding: "10px 0",
      display: "inline-block",
      transition: "0.4s"
    }
  },
  shareButtons: {
    position: "absolute",
    left: "5px",
    top: 0,
    padding: 0,
    margin: 0,
    opacity: 0,
    transform: "translateX(-10px)",
    transition: "all 0.4s cubic-bezier(0.5,-.41,.19,2)",
    "& li": {
      display: "inline-block",
      float: "left"
    },
    "& a": {
      height: "44px",
      width: "44px",
      display: " inline-block",
      lineHeight: "44px",
      textAlign: "center",
      fontSize: "16px"
    },
    "& span": {
      padding: "0px",
      margin: "14px 0px",
      fontSize: "inherit",
      color: "inherit",
      cursor: "inherit",
      display: "inline-block",
      width: "25px"
    }
  },
  fb: {
    background: "rgb(59, 89, 152)",
    borderRadius: "4px 0 0 4px",
    color: "#fff"
  },
  tw: {
    background: "rgb(29, 161, 242)",
    color: "#fff"
  },
  g: {
    background: "rgb(221, 75, 57)",
    color: "#fff"
  },
  in: {
    background: "rgb(0, 119, 181)",
    borderRadius: "0 4px 4px 0",
    color: "#fff"
  }
});
