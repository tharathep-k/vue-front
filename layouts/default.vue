<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/" style="text-decoration: none">
          <h2>Logo</h2>
        </NuxtLink>
        <NuxtLink to="/login" style="text-decoration: none">
          <h3>Login</h3>
        </NuxtLink>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

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
</style>
