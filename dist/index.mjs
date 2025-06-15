// src/components/button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ className = "", ...props }) => {
  return /* @__PURE__ */ jsx("button", { className, ...props });
};
export {
  Button
};
