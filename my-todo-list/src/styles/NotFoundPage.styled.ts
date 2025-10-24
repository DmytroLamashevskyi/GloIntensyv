import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ErrorPageContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100dvh;
  background: #3498db;
  overflow: hidden;
`;

export const ErrorPageInfoBlock = styled.div`
  position: absolute;
  top: 3vw;
  right: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  text-align: right;
`;
export const ErrorPageText = styled.div`
  font-size: clamp(64px, 18vw, 240px);
  font-weight: 700;
  color: #af4034ff;
  text-shadow: 0 4px 32px rgba(0, 0, 0, 0.12);
  line-height: 1;
  margin: 0;
`;

export const ErrorPageBackLink = styled(Link)`
  display: inline-block;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  background: #1e4a7eff;
  color: #b7c8ffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
`;
export const ErrorPageImage = styled.image`
  position: absolute;
  left: 0;
  bottom: 0;
  height: min(70vh, 600px);
  object-fit: contain;
  pointer-events: none;
  user-select: none;
`;
