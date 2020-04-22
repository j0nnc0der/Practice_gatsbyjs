import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
//Switched
// import Footer from '../components/footer'
// import Header from '../components/header'


// Goal: show lists of posts on blog page
//1) Query the title and date for each post in the blog component 
//2) render an ol on the page
//3) Render a Li with neste h2 (title) and p (date) for each post 
//- "render array of objects react"
//4) Test your work



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark  {
            edges {
                node {
                    frontmatter {
                        title 
                        date 
                    }
                }
            }
        }
    }
`)

    console.log(data);


    return (
        <Layout>
            <h1>Blog</h1>

            <p> Posts will show up here later on. </p>
        </Layout>



    )
}

export default BlogPage