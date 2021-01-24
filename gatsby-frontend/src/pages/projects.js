import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { StyledLink } from "../components/ProjectPreview/ProjectPreview.style"
import { ButtonOutline } from "../components/Buttons"
import { ChevronRight } from "react-feather"
import SEO from "../components/seo"

import styled from "styled-components/macro"

export const StyledProjectSection = styled.section`
  display: grid;
  grid-gap: 16px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 86px;
  }
`

const Projects = ({ data }) => {
  const pathname = "/projects"
  const projects = data.allSanityProject.nodes.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  return (
    <Layout title="Projects">
      <SEO
        title="Projects"
        pathname={pathname}
        description="Projects I have worked on either as schoold assignments or client projects"
      />
      <StyledProjectSection className="small-section">
        {projects.map(project => (
          <StyledLink
            to={project.slug.current}
            key={project._id}
            imgurl={project.mainImage.asset.url}
          >
            <div className="project">
              <p className="project__title">{project.title}</p>
              <ButtonOutline>
                View Project
                <ChevronRight />
              </ButtonOutline>
            </div>
          </StyledLink>
        ))}
      </StyledProjectSection>
    </Layout>
  )
}
export default Projects

export const query = graphql`
  {
    allSanityProject {
      nodes {
        title
        date
        _id
        slug {
          current
        }
        mainImage {
          asset {
            url
            fluid {
              ...GatsbySanityImageFluid
              src
            }
          }
          alt
        }
      }
    }
  }
`
