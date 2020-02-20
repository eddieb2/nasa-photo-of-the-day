import React from 'react';
import './Card.css'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SectionOne = styled.div `
  margin: 2% 20%;
`;

const CardSubtitleExp = styled(CardSubtitle)`
  margin-bottom: 2%;
`;

const NasaCardSection = (props) => {
  return(
    <SectionOne>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={props.image} alt="NASA APOD" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitleExp>{props.date}</CardSubtitleExp>
          <CardText>{props.explanation}</CardText>
          <Button href="https://apod.nasa.gov/apod/astropix.html" color="secondary" size="lg" block>NASA</Button>
        </CardBody>
      </Card>
    </SectionOne>
  );
}

export default NasaCardSection;

