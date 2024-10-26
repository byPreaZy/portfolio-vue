<template>
  <section id='about' v-show="activeSection === 'about'">
    <h1>Clere Kévin</h1>
    <p>Bonjour, je suis développeur full stack et designer graphique publicitaire.</p>
  </section>
</template>

<script>
export default {
  name: 'AppAbout',
  props: {
    activeSection: String
    }
};
</script>

<style scoped>
#about h1 {
  font-size: larger;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

#about p {
  font-style: oblique;
  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
