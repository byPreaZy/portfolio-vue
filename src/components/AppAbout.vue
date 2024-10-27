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
    padding: 2em;
    text-align: center;
}

h1 {
    color: rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    font-weight: 400;
    font-size: 2.5em;
    font-style: normal;
    margin-bottom: 1em;
}

p {
    color: rgb(16, 145, 196);
    text-align: center;
    font-style: oblique;
    font-size: 1.2em;
    font-family: "Zen Antique", serif;
    margin-bottom: 1.5em;
}

a {
    color: rgb(16, 145, 196);
    text-decoration: none;
    border-bottom: 2px solid rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    transition: border-color 0.3s ease;
}

a:hover {
    border-color: rgb(11, 104, 146);
}

img {
    max-width: 10rem;
    max-height: 10rem;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
