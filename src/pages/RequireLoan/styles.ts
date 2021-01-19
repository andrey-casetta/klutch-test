import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 30px;

  width: 100%;
  height: 400px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1218px;

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .wallet {
      width: 115px;
      height: 115px;

      margin: 0px 50px;
    }
  }

  h1 {
    color: #228a95;
    font-size: 56px;
    font-family: 'Flexo Bold';
    width: 285px;
  }

  .card-data {
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-top: 75px;
    width: 1000px;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 472px;
    }

    h1 {
      font-size: 21px;
      font-family: 'Flexo Thin';
      width: 100%;
    }

    p {
      font-size: 21px;
      color: #228a95;
      margin-top: 27px;
      font-family: 'Flexo Medium';
      text-align: left;
    }
  }

  button {
    width: 390px;
    height: 98px;

    align-self: center;

    margin-top: 70px;

    font-size: 39px;
    font-family: 'Flexo Bold';

    background-color: #228a95;
    border: 0;
    border-radius: 3px;
    color: #fff;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.1, '#228a95')};
    }
  }
`;

export const InputBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 74px;
  margin-top: 27px;

  background-color: #f8f8f8;

  border: 0;
  border-radius: 3px;

  input {
    width: 100%;
    height: 50%;
    margin: 25px 28px;
    flex: 1;

    border: 0;
    background-color: #f8f8f8;

    color: #777777;
    font-size: 18px;
    font-family: 'Flexo BoldIt';
  }

  a {
    color: #777777;
    font-size: 18px;
    font-family: 'Flexo Regular';
    margin: 25px 28px;
    text-decoration: underline;
  }
`;
