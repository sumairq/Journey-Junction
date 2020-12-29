import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'


const getSiteData = graphql`
     {
    site{
      siteMetadata{
       title
        description
        author
        data {
          name
          age
        }
        
      }
    }
  }
`

const Header = () => {
    const {site:{siteMetadata:{title}}} = useStaticQuery(getSiteData)
    
    return (
        <div>
            <h1>title:{title}</h1>    
            <h1>author:js</h1>    
        </div>
    )
}

export default Header