<template>
  <div class="blue notFound">
    <h2>Hey Hackers!</h2>
    <p>
      Please submit your application by Dec 19th
      <router-link to="/">home 🏠</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 4em;
}
p {
  font-size: 2em;
}
a {
  color: white;
}
.notFound {
  min-height: calc(100vh - 100px);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 4em;
  flex-direction: column;
}
</style>
