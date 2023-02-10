import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const styles = {
  background: {
    margin: 20,
    background: 'aliceblue'
  },
  container:{
    width: '85%',
    maxwidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'aliceblue'
  }
};


function Resume() {
  return (
    <section>
    <p className="content" class="space" style={styles.background}>
      <h5>Resume</h5>
      <a className="button is-primary" href={process.env.PUBLIC_URL + "/Lynn Sadler Resume.pdf"} target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span >Download My Resume</span>
        </a></p>
    <p className="content" class="space" style={styles.background}>
      <h5>Skills</h5>
      <Container style={styles.container} className="container my-5">
 
    </Container>
    </p>
  </section>

  );
}

export default Resume;