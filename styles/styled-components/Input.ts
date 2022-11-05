import styled from "styled-components";

export const Input = styled.input`
  width: 372px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: #f9fafc;
  padding: 0 60px 0 16px;
  color: black;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    color: #9da0a8;
    font-size: 14px;
  }

  &.prod-info {
    padding: 0 16px;
  }
  &.detail {
    height: 280px;
    word-break: normal;
  }
`;

export const Textarea = styled.textarea`
  width: 372px;
  height: 280px;
  border: none;
  border-radius: 8px;
  background-color: #f9fafc;
  padding: 16px;
  color: black;

  resize: none;
  text-align: left;

  ::placeholder {
    color: #9da0a8;
    font-size: 14px;
  }
  :focus {
    outline: none;
  }
`;
