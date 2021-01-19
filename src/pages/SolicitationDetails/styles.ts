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

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 76px;

    div.main {
      width: 586px;
      height: 1152px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      div {
        width: 100%;
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .rectangle {
        display: flex;
        align-items: center;

        height: 79px;
        background-color: #f8f8f8;

        h1 {
          font-size: 29px;
          color: #777777;
          font-family: 'Flexo Thin';
          margin-left: 20px;
        }

        span {
          font-size: 27px;
          color: #228a95;
          font-family: 'Flexo Bold';
          margin-left: 15px;
        }
      }

      .card {
        width: 278px;
        height: 283px;

        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #f8f8f8;

        margin-top: 11px;

        h1 {
          color: #777777;
          font-size: 29px;
          font-family: 'Flexo Thin';
          margin-top: 33px;
        }

        strong {
          color: #31ac2b;
          font-size: 36px;
          font-family: 'Flexo Bold';
          margin-top: 46px;
        }

        img {
          width: 78px;
          height: 103px;
          margin-top: 33px;
        }

        a {
          text-decoration: underline;
          color: #2d98b4;
          font-size: 21px;
          font-family: 'Flexo Thin';
          margin-top: 32px;
        }
      }

      .box {
        display: flex;
        align-items: center;

        flex-direction: column;

        width: 100%;
        height: 350px;

        background-color: #f8f8f8;

        margin-top: 11px;

        span {
          align-self: flex-start;
          margin: 24px 0px 0px 34px;
          color: #777777;
          font-size: 20px;
          font-family: 'Flexo Regular';
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 28px;

          svg {
            margin-left: 24px;
          }
        }

        div.clientData {
          display: flex;
          flex-direction: column;
          margin-top: 18px;
        }

        h1,
        h2,
        h3 {
          color: #777777;
          font-family: 'Flexo BoldIt';
        }

        h1 {
          font-size: 25px;
        }

        h2 {
          font-size: 22px;
          margin-top: 15px;

          span.money {
            margin: 0;
            color: #31ac2b;
          }
        }

        h3 {
          font-size: 20px;
          margin: 14px 0px 0px 34px;

          align-self: flex-start;
        }
      }

      .info {
        width: 100%;
        height: 273px;
        background-color: #e8f3f4;

        border: 2px;
        border-style: dashed;
        border-color: #187680;
        border-radius: 4px;

        margin-bottom: 67px;

        div.clientData {
          margin: 0;

          &:first-of-type {
            margin-top: -10px;

            h1 {
              font-size: 20px;
            }
          }
        }

        .buttons {
          margin-top: 15px;
        }

        button {
          border: 0;
          border-radius: 5px;

          width: 209px;
          height: 59px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 22px;
          color: #fff;
          font-family: 'Flexo Bold';

          margin: 0 13px;

          svg {
            margin: 9px;
          }
        }

        button.orange {
          width: 282px;
          background-color: #ef9c4b;
          margin-top: 20px;
        }

        button.blue {
          background-color: #228a95;
        }
        button.red {
          background-color: #bc3434;
        }
      }
    }
  }
`;
