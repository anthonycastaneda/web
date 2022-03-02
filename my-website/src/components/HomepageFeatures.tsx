import React from 'react';
import { Socials } from '.';
import styles from './HomepageFeatures.module.css';


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