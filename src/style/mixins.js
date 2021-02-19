import { css } from "styled-components";

export function flex({ x = "space-between", y = "center" } = {}) {
  return css`
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
}
