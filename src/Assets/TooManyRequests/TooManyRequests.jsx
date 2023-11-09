import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff; /* White background */
`;

const Content = styled.div`
  text-align: center;
  color: #dc143c; /* Crimson color */
`;

const H1 = styled.h1`
  font-size: 120px;
  margin-bottom: 0;
  margin-top: 0;
`;

const H2 = styled.h2`
  font-size: 24px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #dc143c; /* Crimson color */
  border: 1px solid #dc143c;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8b0000; /* Darker crimson on hover */
  }
`;

const TooManyRequests = () => {
  return (
    <Container>
      <Content>
        <H1>429</H1>
        <H2>Too Many Requests</H2>
        <Paragraph>You've made too many requests recently. Please wait and try your request again later.</Paragraph>
        <Button href={'https://cufoodz.com'}>
          Return to Homepage
        </Button>
      </Content>
    </Container>
  );
};

export default TooManyRequests;
