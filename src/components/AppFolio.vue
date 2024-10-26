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
        { id: 2, title: 'Verso Menu Tacos&Burgers', image: require('@/assets/images/image2.jpg'), details: 'Réalisation des menus de l`enseigne Tacos&Burgers', url: '' }
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
  overflow-x: hidden; /* Empêche le défilement horizontal */
}

h2 {
  display: flex;
  justify-content: center;
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
}

.creation img {
  max-width: 85%;
  height: auto;
}

.creation:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
</style>
