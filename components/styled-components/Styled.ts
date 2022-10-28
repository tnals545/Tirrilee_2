import styled from "styled-components";

export const StyledDiv = styled.div`
  &.prod-details__delete {
    position: absolute;
  }
  &.delete-alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: white;
    border: none;
    border-radius: 10px;
    height: 250px;
    width: 250px;
    padding: 5px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  &.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px); */
  }
`;

export const StyledLi = styled.li`
  &.skeleton-li {
    display: inline-block;
  }
`;
