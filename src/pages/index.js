import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

//Switched 
// import Footer from '../components/footer'
// import Header from '../components/header'

const IndexPage = () => {
  return (
    //Div gets replaced with Layout
    <Layout>
      <h1>Hello.</h1>
      <h2> Jon Here form London</h2>
      <p> Need a developer? <Link to="/contact">Contact Me.</Link></p>
    </Layout>
  )
}

export default IndexPage