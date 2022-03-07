const layoutTemplate = (
  answers
) => `import styles from "./${answers.componentName}.module.scss";

type Props = {
  children: JSX.Element;
}
  
export const ${answers.componentName} = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>
};  
  `;

const remixComponentTemplate = (
  answers
) => `export default function ${answers.componentName}() {
    return (
      <div>
        <h1>${answers.componentName}</h1>
      </div>
  );
}
`;

const componentTemplate = (answers) => `import { useState } from "react";
import styles from "./${answers.componentName}.module.scss";

export const ${answers.componentName} = () => {
  const [initial, setInitial] = useState("");

  return (
    <div>
      <h1>${answers.componentName}</h1>
    </div>
  );
};  
`;

module.exports = { layoutTemplate, remixComponentTemplate, componentTemplate };
