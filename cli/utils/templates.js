const layoutTemplate = (
  answers
) => `const ${answers.componentName} = ({ children }) => {
  return <div>{children}</div>
};

export default ${answers.componentName};
  `;

const layoutTypescriptTemplate = (answers) => `type Props = {
  children: JSX.Element;
}
  
export const ${answers.componentName} = ({ children }: Props) => {
  return <div>{children}</div>
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

export const ${answers.componentName} = () => {
  const [initial, setInitial] = useState("");

  return (
    <div>
      <h1>${answers.componentName}</h1>
    </div>
  );
};  

export default ${answers.componentName};
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
