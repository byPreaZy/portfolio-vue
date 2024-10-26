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
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa; /* Exemple de couleur de fond */
}

img {
  padding: 0.5rem;
  max-width: 5em;
}
</style>