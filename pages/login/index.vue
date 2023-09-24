<template>
  <div>
    <div class="container">
      <div class="body">
        <h2>Login</h2>
        <loginInput />
      </div>
    </div>
  </div>
</template>

<script>
import loginInput from "../../components/loginInput.vue";

export default {
  name: "index",
  components: {
    loginInput,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.body {
  width: 40vw;
  height: 44vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
