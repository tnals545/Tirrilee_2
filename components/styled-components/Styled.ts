import styled from "styled-components";

export const StyledDiv = styled.div`
  &.prod-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px); */
  }
  &.prod-details__delete {
    position: absolute;
  }
  &.delete-alert {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: white;
    border: none;
    border-radius: 10px;
    width: 372px;
    height: 194px;
    text-align: center;
    color: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  &.delete-alert__text {
    width: 332px;
    height: 70px;
    display: flex;
    flex-direction: column;
  }
  &.delete-alert__text p {
    &.isDelete__text--bold {
      width: 332px;
      height: 34px;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
    }
    &.isDelete__text--gray {
      width: 332px;
      height: 24px;
      font-size: 14px;
      color: gray;
    }
  }
  &.delete-alert__button {
    display: flex;
    justify-content: space-between;
    width: 332px;
    height: 48px;
  }
  &.delete-alert__button button {
    &.delete-alert__button-cancel {
      width: 132px;
      height: 48px;
      border: solid 1px #e4e6ea;
    }
  }
`;

export const StyledLi = styled.li`
  &.skeleton-li {
    display: inline-block;
  }
`;
