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

const vueComponent = (answers) => `<script>
export default {
  name: '${answers.componentName}'
}
</script>

<template>
  <div>
    <h1>${answers.componentName}</h1>
  </div>
</template>

<style scoped>
</style>`;

const vueTypescriptComponent = (answers) => `<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: '${answers.componentName}',
    setup() {
      
    }
  })
</script>

<template>
  <div>
    <h1>${answers.componentName}</h1>
  </div>
</template>

<style scoped>
</style>`;

module.exports = {
  layoutTemplate,
  remixComponentTemplate,
  componentTemplate,
  vueComponent,
  vueTypescriptComponent,
};
