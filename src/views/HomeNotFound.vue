<template>
    <div id='404'>
      <img src="@/assets/images/404.png" alt="404" @click="GoToHome">
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeNotFound',
    methods: {
      GoToHome () {
        this$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  div {
    text-align: center;
    padding: 2rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  