import React, { useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { socialShareLinks, defaultUrl } from "./config";
import { useStyles } from "./index.style";
const load = require("fg-loadcss");

const SocialShareButtons = ({
  url = defaultUrl,
  description,
  ...props
}) => {
  const classes = useStyles();
  useEffect(() => {
    load.loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);
  return (
    <div {...props} className={classes.container}>
      <IconButton className={classes.shareIcon}>
        <Icon className="fas fa-share-alt" />
      </IconButton>
      <div className={classes.content}>
        <span>{description || "Share with your friend!"}</span>
        <ul className={classes.shareButtons}>
          <li>
            <Tooltip title="Share on Facebook" className={classes.fb}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={`${socialShareLinks.facebook(encodeURI(url))}`}
              >
                <Icon className="fab fa-facebook-f" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Share on Twitter">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={`${socialShareLinks.twitter(encodeURI(url))}`}
                className={classes.tw}
              >
                <Icon className="fab fa-twitter" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Share on Google Plus">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={`${socialShareLinks.google(encodeURI(url))}`}
                className={classes.g}
              >
                <Icon className="fab fa-google-plus-g" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Share on Linkedin">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={`${socialShareLinks.linkedin(encodeURI(url))}`}
                className={classes.in}
              >
                <Icon className="fab fa-linkedin-in" />
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShareButtons