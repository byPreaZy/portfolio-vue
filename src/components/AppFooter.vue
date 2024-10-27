<template>
  <footer>
    <div class="social-icons">
      <a href="https://github.com/byPreaZy" target="_blank"><img src="@/assets/images/github.png" alt="GitHub"></a>
      <a href="https://linkedin.com/in/kévin-clere-209b97206/" target="_blank"><img src="@/assets/images/linkedin.png" alt="LinkedIn"></a>
    </div>
    <p class="last-updated">Dernière mise à jour : {{ lastUpdated }}</p>
  </footer>
</template>

  
  <script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        lastUpdated: '27-10-2024'
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
    padding: 2rem;
    color: rgb(0, 0, 0);
    font-family: "Zen Antique", serif;
    text-align: center;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.social-icons a {
    margin: 0 1rem;
    transition: transform 0.3s ease;
}

.social-icons a:hover {
    transform: scale(1.1);
}

.social-icons img {
    max-width: 3rem;
    height: auto;
}

.last-updated {
    font-size: 1em;
    margin-top: 1rem;
}

</style>