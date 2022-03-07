const layoutTemplate = (
  answers
) => `import styles from "./${answers.componentName}.module.scss";
type Props = {
  children: JSX.Element;
}
  
export const ${answers.componentName} = ({ children }: Props) => {
  return <div>{children}</div>
};  
  `;

const layoutRemixTemplate = (answers) => `import { Outlet } from "remix";
import styles from "./${answers.componentName}.module.scss";
  
export const ${answers.componentName} = () => {
  return (
  <div>
    <Outlet /> 
  </div>
)};  
  `;

const componentTemplate = (answers) => `import { useState } from "react";
import styles from "./${answers.componentName}.module.scss";

export const ${answers.componentName} = () => {
  const [initial, setInitial] = useState<string>("");

  return (
    <>
      <h1>${answers.componentName}</h1>
    </>
  );
};  
`;

module.exports = { layoutTemplate, layoutRemixTemplate, componentTemplate };
