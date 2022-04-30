import { IAnswers } from "../../types";

export const componentTemplate = (answers: IAnswers) => `<script setup>
</script>

<template>
  <h1>${answers.componentName}</h1>
</template>
`;
