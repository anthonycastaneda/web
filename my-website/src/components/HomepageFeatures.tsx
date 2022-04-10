/* This is importing the React library. */
import React from "react";
/* This is importing the `Socials` component from the `./` directory. */
import { Socials } from ".";
/* This is importing the CSS styles from the `HomepageFeatures.module.css` file. */
import styles from "./HomepageFeatures.module.css";

/**
 * This function returns a section with a container and a row.
 * The row contains a column that is offset by 4 and has a width of 8.
 * The column contains a socials component
 * @returns A section element with a class of `features` and a container element with a class of
 * `container`.
 */
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--offset-4 col--8">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
