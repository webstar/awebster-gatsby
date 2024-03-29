// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/DSC_0078-2.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Home Page</title>
    <meta name="description" content="Your description" />
  </>
)

// Step 3: Export your component
export default IndexPage