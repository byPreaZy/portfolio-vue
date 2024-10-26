<template>
    <footer>
      <div>
        <a href="https://https://github.com/byPreaZy" target="_blank"><img src="@/assets/images/github.png" alt="GitHub"></a>
        <a href="https://linkedin.com/in/kévin-clere-209b97206/" target="_blank"><img src="@/assets/images/linkedin.png" alt="LinkedIn"></a>
      </div>
      <p>Dernière mise à jour : {{ lastUpdated }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        lastUpdated: '26-10-2024'
      }
    }
  }
  </script>

<style scoped>

</style>