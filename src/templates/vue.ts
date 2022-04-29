export const componentTemplate = () => `<script setup>
import { ref } from "vue";
const counter = ref(0);
</script>

<template>
  <h1>{{ counter }}</h1>
</template>
`;
