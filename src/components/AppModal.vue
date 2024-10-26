<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2>{{ creation.title }}</h2>
      <p>{{ creation.details }}</p>
      <a v-if="creation.url" :href="creation.url" target="_blank" class="learn-more">Pour en savoir plus cliquez ici</a>
      <button @click="closeModal">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    creation: Object
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.modal button {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.modal button:hover {
  background-color: #555;
}

.learn-more {
  margin-top: 1rem;
  color: #007bff;
  text-decoration: underline;
}

.learn-more:hover {
  text-decoration: none;
}
</style>
