import type { IAnswers } from "../../types";

const componentTemplate = (
  answers: IAnswers
): string => `import { useState } from "react";

export const ${answers.componentName} = () => {
  const [initial, setInitial] = useState("");
  return (
    <div>
      <h1>${answers.componentName}</h1>
    </div>
  );
};
`;

const layoutTemplate = (
  answers: IAnswers
): string => `const ${answers.componentName} = ({ children }) => {
  return <div>{children}</div>
};
export default ${answers.componentName};
  `;

export { componentTemplate, layoutTemplate };
