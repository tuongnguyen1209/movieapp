import styled from "styled-components";

export const MyFooterDefault = styled.div`
  width: 100%;
  padding: 10px;
  color: white;
  display: flex;
  margin-top: 10px;
  border-top: 1px solid white;
  ul {
    list-style-type: none;
  }
  .cate {
    width: 30%;
    .logo {
      width: 50%;
      padding: 15px;
      img {
        width: 100%;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        padding: 5px;
        a {
          color: white;
          text-decoration: none;
          :hover {
            color: #febb00;
          }
        }
      }
    }
  }

  .nguon {
    width: 40%;
    padding: 10px;
    margin: auto;
    a {
      color: white;
      padding: 5px;
    }
  }
  .author {
    width: 30%;
    padding: 15px;
    display: flex;
    justify-content: flex-end;

    ul {
      width: 100%;
      li {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        span {
          text-decoration: underline;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .cate {
      width: 100%;
      border-bottom: 1px solid white;
    }
    .nguon {
      width: 80%;
    }
    .author {
      border-top: 1px solid white;

      width: 100%;
    }
  }
`;
