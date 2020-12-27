import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={styles.about}>
        <Title title="about" subtitle="us" />
        <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
                <img src={img} alt="About Company"/>
            </div>
            </article>
            <article className={styles.aboutInfo}>
                <h4>
                explore the difference
                </h4>
             <p>Ea id deserunt consequat et velit aliquip sint nostrud laboris consequat ad. Pariatur minim officia 
                 velit cupidatat aliquip eiusmod laborum. Excepteur est dolor duis consequat.</p>
             <p>Ea id deserunt consequat et velit aliquip sint nostrud laboris consequat ad. Pariatur minim officia 
                 velit cupidatat aliquip eiusmod laborum. Excepteur est dolor duis consequat.</p>
                 <button type="button" className="btn-primary">
                     read more
                 </button>
            
            </article>
        </div>

        </section>
    )
}

export default About
