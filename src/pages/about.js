import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
//Switched
// import Footer from '../components/footer'
// import Header from '../components/header'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>I am Jon the greatest</p>
            <p><Link to="/contact">Want to work  with me ? Reach out.</Link>
            </p>
        </Layout>
    )
}

export default AboutPage