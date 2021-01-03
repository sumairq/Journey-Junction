import React from 'react'
import ToursList from './ToursList'
import {useStaticQuery, graphql} from 'gatsby'

const getTours = graphql`
query{
    tours:allContentfulTour{
       edges{
         node{
           name
           price 
           slug
           country
           contentful_id
           days
           featured
           images{
             fluid{
                ...GatsbyContentfulFluid
             }
           }
         }
           
         
       }
     }
   }
`

const Tours = () => {
    const {tours}= useStaticQuery(getTours);

    return (
        <div>
         hello from tours  
         <ToursList tours={tours} />    
        </div>
    )
}

export default Tours
 
