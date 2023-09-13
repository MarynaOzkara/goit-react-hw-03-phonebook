import styled from 'styled-components';

export const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #000;
  margin-right: 5px;
`;
export const Name = styled.p`
  font-size: 18px;
`;
export const Number = styled.p`
  margin-left: 10px;
  font-size: 18px;
`;
export const CloseButton = styled.button`
  width: 50px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid teal;
  color: teal;
  margin-left: 20px;
  cursor: pointer;
  transition: background-color ease 250ms;
  &:hover,
  :focus {
    background-color: teal;
    color: #fff;
  }
`;
