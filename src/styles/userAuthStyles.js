import styled from "styled-components";

export const LoginWrapperDiv = styled.div`
  width: 30%;
  margin: 7.5rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 500px) {
    width: 92%;
    margin-top: 7rem;
  }
  section:nth-of-type(1) {
    background-color: #bdf2d5;
    border-radius: 1rem 1rem 0 0;
    text-align: center;
    h2 {
      color: black;
    }
  }
  section:nth-of-type(2) {
    padding: 0 4rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      width: 100%;
      margin: 1rem auto;
      text-align: left;
      @media (max-width: 500px) {
        width: 100%;
      }
      a {
        text-decoration: none;
        color: #6ea22c;
      }
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
        span {
          font-weight: bold;
        }
        p {
          text-align: center;
          font-size: 1.4rem;
          margin: 0;
        }
      }
    }
  }
`;

export const SignupWrapperDiv = styled.div`
  width: 30%;
  margin: 7.5rem auto 0;
  display: flex;
  border-radius: 1rem;
  box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 500px) {
    width: 92%;
    margin-top: 7rem;
    flex-direction: column;
  }
  section:nth-of-type(1) {
    width: 100%;
    padding: 0 4rem 4rem;
    @media (max-width: 500px) {
      width: 100%;
      padding: 0 2.5rem 2.5rem;
    }
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: 500px) {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        color: #6ea22c;
      }
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
        :nth-of-type(4) {
          p {
            font-size: 1rem;
            color: red;
            margin: 0;
          }
        }
        :nth-of-type(6) {
          p {
            text-align: center;
            font-size: 1.4rem;
            margin: 0;
          }
        }
      }
    }
  }
`;
