<template>
<header>
    <img src="../assets/images/Logo.png" alt="Logo" @click='goToHome'>
    <nav>
        <ul>
            <li class="button"><router-link to='/about' @click="showSection('about')" exact-active-class="active">Présentation</router-link></li>
            <li class="button"><router-link to='/folio' @click="showSection('folio')" exact-active-class="active">Créations</router-link></li>
            <li class="button"><router-link to='/contact' @click="showSection('contact')" exact-active-class="active">Contact</router-link></li>
        </ul>
    </nav>
</header>
</template>
  
<script>
export default {
    methods: {
        goToHome() {
            this.$emit('show-section', 'about');
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

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(16, 145, 196);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}

.button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

.button:active {
    background-color: #004494;
}

nav ul li a {
    text-decoration: none;
    color: #ffffff;
}

nav ul li a.active {
    text-decoration: underline;
}

</style>
