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
  }

  .value {
    margin-top: 68px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    h2 {
      color: #228a95;
      font-size: 40px;
      font-family: 'Flexo Bold';
    }

    div {
      div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          margin-top: 10px;
        }
      }

      margin-top: 8px;
      display: flex;
      align-items: center;

      input {
        width: 470px;
        height: 61px;

        border: 0;
        border-radius: 2px;

        font-size: 30px;
        font-family: 'Flexo Regular';
        background-color: #f8f8f8;
        color: #777777;
        text-align: center;

        padding: 20px;
      }

      button {
        width: 160px;
        height: 53px;

        margin-left: 30px;

        font-size: 22px;
        font-family: 'Flexo Bold';

        background-color: #ef9c4b;
        border: 0;
        border-radius: 3px;
        color: #fff;

        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.1, '#ef9c4b')};
        }
      }
    }
  }

  .wallet {
    width: 115px;
    height: 115px;

    margin: 0px 50px;
  }

  h1 {
    color: #228a95;
    font-size: 56px;
    font-family: 'Flexo Bold';
    width: 285px;
  }

  table {
    border-collapse: collapse;
    text-align: center;
    margin-top: 55px;

    caption {
    }
    .name {
      background-color: #f8f8f8;

      border: 0;
      color: #228a95;
      font-size: 29px;
      font-family: 'Flexo Bold';
      padding: 10px;
    }

    tr.head {
      td {
        color: #777777;
        font-size: 25px;
        font-family: 'Flexo Bold';
        border-bottom: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        background-color: #f8f8f8;
      }

      td:first-child {
        background-color: #fff;
      }
    }

    tr.selectable {
      background-color: rgba(239, 223, 75, 0.23);
    }

    td {
      border-bottom: 1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      padding: 18px 33px;
      color: #777777;
      font-size: 23px;
      font-family: 'Flexo Regular';
    }

    thead {
      align-self: center;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 86.42px;

  background-color: #228a95;
  color: #fff;

  padding: 0 400px;

  position: fixed;
  bottom: 0;
  width: 100%;

  h1 {
    font-size: 22px;
  }

  button {
    width: 160px;
    height: 53px;

    font-size: 22px;
    font-family: 'Flexo Bold';

    background-color: #ef9c4b;
    color: #fff;

    border: 0;
    border-radius: 3px;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.1, '#ef9c4b')};
    }
  }
`;
