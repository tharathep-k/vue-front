<template>
  <div>
    <h1>Show Data</h1>
  </div>
</template>

<script>
import protectRoute from "../../middlewares/auth";

export default {
  middleware: {
    protectRoute,
  },
};
</script>

<style scoped></style>
