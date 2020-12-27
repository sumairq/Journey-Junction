import { Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
 
export default function Home() {
         return ( 
   <>      
  <Layout>
        
        <SimpleHero>
              <Banner title="continue exploring" info=" Ea elit enimnulla reprehenderit dolor sunt inct enim fugiat labore labor
              is aute eu veniam culpa ea incididunt in laborum.">
               <Link to="/tours" className="btn-white">explore tours</Link>
              </Banner>
           
        </SimpleHero>
        <About />
        <Services/>
   </Layout>
   </>
         )
}
