// src/components/button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ className = "", ...props }) => {
  return /* @__PURE__ */ jsx("button", { className, ...props });
};

// src/components/input/Input.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = ({ className = "", ...props }) => {
  return /* @__PURE__ */ jsx2("input", { className, ...props });
};
export {
  Button,
  Input
};
