<template>
  <section id='about' v-show="activeSection === 'about'">
    <h1>Clere Kévin</h1>
    <p>L'entreprise à été crée en 2024. Ses domaines d'actions sont: <br>
    -le devellopement Web. <br>
    -le Graphisme publicitaire. <br>
    Nous sommes situé au <a href="https://maps.app.goo.gl/1ZHn2mD1c7djiEVT6" target="_blank">55 impasse des buguets 71500 Ratte</a> <br>
    Nous ferons tous pour vous garantir un resultat professionnel le plus rapidement possible.
    N'hésitez pas à allez visiter notre <a href="https://www.facebook.com/Clerelydesign" target="_blank">page facebook</a> pour plus d'informations.</p>
    <img src="@/assets/images/Logo.png" alt="Logo de l'entreprise">
  </section>
</template>

<script>
export default {
  name: 'AppAbout',
  props: {
    activeSection: String
    },
  };

</script>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: "Zen Antique", serif;
  font-weight: 400;
  font-size: xx-large;
  font-style: normal;
}

p {
  text-align: center;
  font-style: oblique;
  font-size: 1.2rem;
  font-family: "Zen Antique", serif;
}

a {
  border: 3 1 rgb(0, 4, 243);
  font-family: "Zen Antique", serif;
}

img{
  max-width: 10rem;
  max-height: 10rem;

}
</style>
