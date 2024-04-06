'use client';

import styled from 'styled-components';

export const Button = styled.button`
  max-width: 270px;
  padding: 24px 75px 25px 75px;
  transition: 0.5s;
  font-weight: 700;
  color: white;
  background-image: linear-gradient(90deg, #3690f7, #0277fa, #64adff, #0257b8);
  background-size: 400% 208%;
  animation: gradientAnimation 5s linear infinite alternate;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;

  @keyframes gradientAnimation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &:hover {
    background-image: linear-gradient(
      90deg,
      #1a4f8b,
      #0277fa,
      #64adff,
      #064ea0
    );
    transform: scale(1.001);
    animation: gradientAnimation 5s linear infinite alternate;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    color: white;
    cursor: pointer;
  }
`;
