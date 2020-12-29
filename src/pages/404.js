import React from 'react'
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import {Link} from 'gatsby'  using AniLink instead of Link for special effects
import Banner from '../components/Banner'
import Layout from '../components/Layout'

export default function fourOFour() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <AniLink fade to='/' className="btn-white">back to home page</AniLink>
                </Banner>
            </header>
        </Layout>
    )
}
