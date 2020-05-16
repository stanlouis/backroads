import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Sorry nothing here as of yet">
          <Link to="/" className="btn-white">
            back to home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
