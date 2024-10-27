<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2>{{ creation.title }}</h2>
      <p>{{ creation.details }}</p>
      <a v-if="creation.url" :href="creation.url" target="_blank" class="learn-more">Pour en savoir plus cliquez ici</a><br>
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
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.modal h2 {
    color: rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    font-size: 1.5em;
    margin-bottom: 1em;
}

.modal p {
    color: rgb(16, 145, 196);
    font-family: "Zen Antique", serif;
    font-size: 1em;
    margin-bottom: 1em;
}

.modal button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgb(16, 145, 196);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

.modal button:hover {
    background-color: rgb(11, 104, 146);
}

.learn-more {
    margin-top: 1rem;
    color: rgb(16, 145, 196);
    text-decoration: underline;
    font-family: "Zen Antique", serif;
    transition: text-decoration 0.3s ease;
}

.learn-more:hover {
    text-decoration: none;
}

</style>
