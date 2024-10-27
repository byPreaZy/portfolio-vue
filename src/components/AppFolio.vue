<template>
  <section id='folio' v-show="activeSection === 'folio'">
    <h2>Mes Créations</h2>
    <Carousel :items-to-show="1" :wrap-around="true">
      <Slide v-for="creation in creations" :key="creation.id">
        <div class="creation" @click="openModal(creation)">
          <img :src="creation.image" alt="Création">
          <h3>{{ creation.title }}</h3>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <AppModal v-if="showModal" :creation="selectedCreation" @close="closeModal" />
  </section>
</template>

<script>
import AppModal from './AppModal.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'AppFolio',
  props: {
    activeSection: String
  },
  components: {
    AppModal,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data() {
    return {
      creations: [
        { id: 1, title: 'Recto Menu Tacos&Burgers', image: require('@/assets/images/image1.jpg'), details: 'Réalisation des menus de l`enseigne Tacos&Burgers', url: 'https://www.facebook.com/tacos.burgers.3/?locale=fr_FR' },
        { id: 2, title: 'Verso Menu Tacos&Burgers', image: require('@/assets/images/image2.jpg'), details: 'Réalisation des menus de l`enseigne Tacos&Burgers', url: '' },
        { id: 3, title: 'Logo Refuge Enjoy Life', image: require('@/assets/images/Logo-Refuge.png'), details: 'Création du Logo pour le refuge enjoy life, etablissement dune charte graphique', url: 'https://www.facebook.com/RefugeEnjoyLife' },
        { id: 4, title: 'Mon Cv html/css', image: require('@/assets/images/mon-cv.png'), details: 'Réalisation de mon CV en html/css', url: 'https://github.com/byPreaZy/CV-HTML-CSS' },
        { id: 5, title: 'CDC La Socketerie', image: require('@/assets/images/CDC-socketerie.png'), details: 'Réalisation d un cahier des charges pour le compte de la socketerie', url: 'https://docs.google.com/document/d/1ZK5XD37S1_ptYxeqrfpdC3b6iDYifRfAr1LKLn1Y48o/edit?usp=sharing' }
      ],
      showModal: false,
      selectedCreation: null
    };
  },
  methods: {
    openModal(creation) {
      this.selectedCreation = creation;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
#folio {
    width: 100%;
    overflow-x: hidden;
    padding: 2em;
    text-align: center;
}

h2 {
    color: rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    font-size: 2em;
    margin-bottom: 1em;
}

.creation {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
    padding: 1rem;
    max-height: 150rem;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    transform: scale(0.9);
}

.creation img {
    max-width: 85%;
    height: auto;
    border-radius: 10px;
}

.creation:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px) scale(0.9);
}

.creation h3 {
    color: rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    font-size: 1.5em;
    margin-top: 1em;
}
</style>
