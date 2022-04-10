/* This is importing the React library, the useEffect hook, and the loadCSS library. */
import React, { useEffect } from "react";
import { loadCSS } from "fg-loadcss";
import Icon from "@mui/material/Icon";
import { useColorMode } from "@docusaurus/theme-common";

/* This is a list of objects that contain the name of the social media site, the classname of the icon,
and the link to the site. */
const socialDetails = [
  {
    name: "linkedin",
    classname: "fab fa-linkedin fa-fw",
    link: "https://www.linkedin.com/in/anthonydcastaneda/",
  },
  {
    name: "github",
    classname: "fab fa-github fa-fw",
    link: "https://github.com/anthonycastaneda",
  },
  {
    name: "at",
    classname: "fas fa-at fa-fw",
    link: "mailto:anthony@anthonycastaneda.com",
  },
];

/**
 * Given a site, return the color of the hover icon
 * @param {string} site - The name of the social media site.
 * @returns A string.
 */
const getHoverIconColor = (site: string): string => {
  switch (site) {
    case "linkedin":
      return "#0a66c2";
    case "github":
      return "purple";
    case "youtube":
      return "#c4302b";
    case "at":
      return "brown";
    default:
      return "blue";
  }
};

/* The `useColorMode` hook is used to toggle between light and dark themes. */
export const Socials = () => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useColorMode();

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChild(node);
      }
    };
  }, []);

  return (
    <div>
      {socialDetails.map((cn) => {
        return (
          <a
            href={cn.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cn.classname}
          >
            <Icon
              className={cn.classname}
              sx={{
                color: isDarkTheme ? "white" : "black",
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                "&:hover": {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
