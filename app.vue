<template>
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-in-out;
}

.page-enter-from {
  filter: blur(1rem);
}

.page-enter-to {
  filter: blur(0);
}

.page-leave-to {
  scale: 2;
  filter: blur(1rem);
}
</style>
