<template>
    <section id='folio' v-show="activeSection === 'folio'">
      <h2>Mes Créations</h2>
      <div class="carousel">
        <div v-for="creation in creations" :key="creation.id" @click="openModal(creation)" class="creation">
          <img :src="creation.image" alt="Création">
          <h3>{{ creation.title }}</h3>
        </div>
      </div>
      <AppModal v-if="showModal" :creation="selectedCreation" @close="closeModal" />
    </section>
  </template>
  
<script>
import AppModal from '@/components/AppModal.vue';
  
export default {
    name: 'AppFolio',
    props: {
        activeSection: String
    },
    components: {
        AppModal
    },
    data() {
        return {
            creations: [
                { id: 1, title: 'Recto Menu Tacos&Burgers', image: require('@/assets/images/image1.jpg'), details: 'Réalisation des menus de l`enseigne Tacos&Burgers' },
                { id: 2, title: 'Verso Menu Tacos&Burgers', image: require('@/assets//images/image2.jpg'), details: 'Réalisation des menus de l`enseigne Tacos&Burgers' }
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
}
  </script>
  
  <style scoped>
  .carousel {
    background-color: #333;
    display: flex;
    max-width: 100%;
    margin: 1rem;
    overflow-x: auto;
    gap: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: box-shadow 0.3s;
  }
  
  .creation {
    justify-content: space-around;
    cursor: pointer;
    margin-bottom: 1rem;
    padding: 1rem;
  }
  
  .carousel img {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 50em;
  }
  
  .creation:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  </style>
  