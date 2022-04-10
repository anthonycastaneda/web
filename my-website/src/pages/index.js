/* This is the top of the file. It imports all the dependencies that we need to use in our file. */
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Socials } from "../components";
/**
 * It returns a header with a title, tagline, and avatar
 * @returns A header with a title, tagline, and social media links.
 */

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Box sx={{ display: "flex" }}>
          <Box m="auto">
            <Avatar
              alt="Anthony Castaneda"
              src={useBaseUrl("/img/anthony.png")}
              sx={{ width: 150, height: 150, m: 2 }}
            />
          </Box>
        </Box>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">This is not my beautiful wife 👰‍♀️</p>
        <Socials />
      </div>
    </header>
  );
}
// Home returns home
/**
 * This function returns a React component that renders the homepage
 * @returns A layout component that contains the homepage header component.
 */
export default function Home() {
  return (
    <Layout title="Home" description="Anthony Castaneda Blog">
      <HomepageHeader />
    </Layout>
  );
}
