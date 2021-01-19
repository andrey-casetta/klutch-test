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

    h1 {
      color: #228a95;
      font-size: 56px;
      font-family: 'Flexo Bold';
      width: 285px;
    }

    .wallet {
      width: 115px;
      height: 115px;

      margin: 0px 50px;
    }
  }

  .solicitationInfo {
    margin-top: 25px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 613px;
    height: 96px;

    background-color: #f8f8f8;

    margin-left: 170px;

    h1 {
      color: #228a95;
      font-size: 22px;
      font-family: 'Flexo MediumIt';
      margin-left: 24px;
    }

    span {
      color: #777777;
      font-size: 21px;
      font-family: 'Flexo BoldIt';
      margin-left: 24px;
    }

    input {
      width: 296px;
      height: 62px;
      border: 0;
      color: #ef9c4b;
      font-size: 25px;
      font-family: 'Flexo BoldIt';
      padding: 14px;

      margin: 18px 28px 18px 0px;
    }
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;

    h1 {
      color: #228a95;
      font-size: 40px;
      font-family: 'Flexo Bold';
    }

    h2 {
      align-self: flex-start;
      margin-top: 23px;
      color: #228a95;

      font-size: 28px;
      font-family: 'Flexo Thin';
    }

    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 600px;
      height: 70px;
      margin: 0;

      h1 {
        font-size: 20px;
        font-family: 'Flexo MediumIt';
      }

      input {
        width: 238px;
        height: 50px;
        border: 0;
        margin: 0;
        margin-right: 17px;
        color: #ef9c4b;
        font-size: 25px;
        font-family: 'Flexo BoldIt';
      }

      &:first-child {
        margin-right: 20px;
      }
    }

    .upper {
      display: flex;

      & + div {
        margin-top: 15px;
      }

      .box {
        background-color: #e8ffe3;
      }
    }

    .lower {
      display: flex;
      margin-top: 20px;
    }
  }
`;
