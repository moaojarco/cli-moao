const layoutTemplate = (
  answers
) => `import styles from "./${answers.componentName}.module.scss";
export const ${answers.componentName} = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}; 
  `;

const layoutTypescriptTemplate = (
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

const vueComponent = (answers) => `<script setup>
import { ref } from 'vue';

const hello = ref("Hello");
</script>

<template>
  <div>
    <h1>{{ hello }} ${answers.componentName}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #42b883;
  font-size: 2rem;
}
</style>`;

const vueTypescriptComponent = (answers) => `<script lang="ts" setup>
import { ref } from 'vue';

const hello = ref("Hello");
</script>

<template>
  <div>
    <h1>{{ hello }} ${answers.componentName}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #42b883;
  font-size: 2rem;
}
</style>`;

module.exports = {
  layoutTemplate,
  layoutTypescriptTemplate,
  remixComponentTemplate,
  componentTemplate,
  vueComponent,
  vueTypescriptComponent,
};
