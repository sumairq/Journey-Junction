import { Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from "gatsby"
import StyledHero from '../components/StyledHero'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import {Link} from 'gatsby'  using AniLink instead of Link for special effects



 
export default function Home({data}) {

         return ( 
   <>      
  <Layout>
        
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
              <Banner title="continue exploring" info=" Ea elit enimnulla reprehenderit dolor sunt inct enim fugiat labore labor
              is aute eu veniam culpa ea incididunt in laborum.">
               <AniLink fade to="/tours" className="btn-white">explore tours</AniLink>
              </Banner>
           
        </StyledHero>
        <About />
        <Services/>
   </Layout>
   </>
         )
}

export const query = graphql`
query{
      defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
        childImageSharp{
          fluid(quality:90, maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
`
