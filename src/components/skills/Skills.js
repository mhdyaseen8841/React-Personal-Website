import React from 'react'
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './skills.css';
 
const useStyles = makeStyles((theme) => ({
    main: {
      maxWidth: '100vw',
      marginTop: '3em',
      marginBottom: "auto",
    },
  }));

export const Skills = ()=> {
    const classes = useStyles();

  return (
    <section >
<Container component="main" >
    <div class="main">
    <div class="skill">
      <img className='img1' src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" />
      <h4>Javascript</h4>
      <p>7+ years experience</p>
      <p>Advanced Level</p>
    </div>
    <div class="skill">
      <img  className='img1' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
      <h4>React</h4>
      <p>1 year experience</p>
      <p>Advanced Level</p>
    </div>
     <div class="skill">
      <img  className='img1' src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png" />
      <h4>Angular 2+</h4>
      <p>1 year experience</p>
      <p>Intermediate Level</p>
    </div>
      <div class="skill">
      <img  className='img1' src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-512.png" />
      <h4>Angular 1.x</h4>
      <p>3 years experience</p>
      <p>Advanced Level</p>
    </div>
       <div class="skill">
      <img  className='img1' src="https://cdn3.iconfinder.com/data/icons/social-media-special/256/w3c-512.png" />
      <h4>Web Acessibility</h4>
      <p>1 year experience</p>
      <p>Advanced Level</p>
    </div>
  </div>
  </Container>
</section>
  )
}

