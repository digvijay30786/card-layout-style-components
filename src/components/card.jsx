import styled from "styled-components";
export function Card({ children }) {
  const CardDesign = styled.div`
    width: 50%;
  `;

  return <CardDesign>{children}</CardDesign>;
}
