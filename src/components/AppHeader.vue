<template>
<header>
    <img src="../assets/images/Logo.png" alt="Logo" @click='goToHome'>
    <nav>
        <ul>
            <li><router-link to='/about' @click="showSection('about')">Présentation</router-link></li>
            <li><router-link to='/folio' @click="showSection('folio')">Créations</router-link></li>
            <li><router-link to='/contact' @click="showSection('contact')">Contact</router-link></li>
        </ul>
    </nav>
</header>
</template>
  
<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/');
        },
        showSection(section) {
            this.$emit('show-section', section);
        }
    }
};
</script>
  
<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    max-height: 20%;
}
  
header img {
    max-width: 15em;
    max-height: 15em;
    cursor: pointer;
}
  
nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}
  
nav ul li {
    margin-left: 1rem;
}
  
nav ul li a {
    text-decoration: none;
    color: #007bff;
}
  
nav ul li a:hover {
    text-decoration: underline;
}
</style>
  