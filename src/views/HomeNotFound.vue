<template>
  <div id='404'>
    <h1>404</h1>
    <img src="@/assets/images/404.png" alt="404" @click='GoToHome'>
  </div>
</template>
  
<script>
export default {
  name: 'HomeNotFound',
  methods: {
    GoToHome () {
      this.$router.push('/')
    }
  }
}
  </script>
  
<style scoped>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
}
  
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
}

h1 {
    color: rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    font-size: 2em;
    margin-top: 1rem;
}
  
img {
    cursor: pointer;
    max-width: 100%;
    max-height: 100%;
    height: auto;
}
</style>
  