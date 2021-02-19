import styled from "styled-components";
import { grey } from "../../../../style";
import InputComp from "../Input";

export const Container = styled.div`
  position: relative;
`;
export const Input = styled(InputComp)``;
export const DropDown = styled.ul`
  position: absolute;
  width: 100%;
  top: 6rem;
  margin-top: 0.5rem;
  padding: 1rem;
  border: 1px solid ${grey.lighter};
  background-color: white;
  max-height: 30rem;
  border-radius: 4px;
  overflow: scroll;
`;
export const Item = styled.li`
  margin-bottom: 1rem;
  cursor: pointer;
`;
