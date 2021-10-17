import React from 'react'
import Header from '../components/header'
import * as styles from './about.module.css'
import Container from '../components/container'

const User = props => (
    <div className={styles.user}>
        <h2 className={styles.username}>{props.username}</h2>
        <img src={props.avatar} className={styles.avatar} alt={props.title}/>
        <caption className={styles.description}>{props.description}</caption>
    </div>
)


export default () => (
    <Container>
        {/* className through props from Header first and then global css */}
        <Header headerText="About Us Page" styleClasses="centered"/>
        {/* className from global.css */}
        <p className="centered">CSS modules were used to style this page'c container.</p>
        <User 
        username="Giullietta"
        avatar="/avalon-avatar.jpg"
        description="Photo by Jeremy Killpatrick" />
        <User 
        username="Margot"
        avatar="/avalon-avatar-03.jpg"
        description="Photo by Jeremy Killpatrick" />
        <User 
        username="Julia"
        avatar="/avalon-avatar-02.jpg"
        description="Photo by Jeremy Killpatrick" />
    </Container>

)