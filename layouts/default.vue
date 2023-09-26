<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/" style="text-decoration: none">
          <h2>Logo</h2>
        </NuxtLink>
        <div class="link">
          <NuxtLink to="/login" style="text-decoration: none" v-if="isAuthenticated === false">
            <h3>Login</h3>
          </NuxtLink>
          <div @click="onLogout" v-else>
            <h3>Logout</h3>
          </div>
        </div>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { authStore } from "../store/auth-store";
import { ref } from "vue"

const store = authStore();
const isAuthenticated = ref(store.isAuthenticate);

watch(() => store.isAuthenticate, (newValue, oldValue) => {
  isAuthenticated.value = newValue
})

const onLogout = (e) => {
  try {
    store.logout();

    const isAuthenticated = store.isAuthenticate;
    if (!isAuthenticated) {
      return navigateTo("/login");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
header {
  border: 2px solid black;
  background-color: antiquewhite;
}

nav {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 0 16px;
}

h2 {
  color: blue;
}

h2:hover {
  color: red;
}

h3 {
  color: black;
}

h3:hover {
  color: orange;
}

.link {
  display: flex;
  gap: 16px;
}
</style>
