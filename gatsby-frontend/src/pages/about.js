import React from "react"
import Layout from "../components/Layout"
import Aboutpage from "../components/About/about"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export const query = graphql`
  {
    page: sanityPage(slug: { current: { eq: "about" } }) {
      title
      description
      _rawBody
      mainImage {
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
            src
          }
        }
      }
    }
  }
`

const About = props => {
  const { data, errors } = props
  const page = data && data.page
  const pathname = props.pathname

  return (
    <Layout title={page.title} about="about">
      <SEO
        title={page.title}
        description={page.description}
        pathname={pathname}
      />
      {errors && <p>Error</p>}
      <Aboutpage page={page} />
    </Layout>
  )
}
export default About
