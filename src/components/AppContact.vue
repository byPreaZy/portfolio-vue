<template>
<section id='contact' v-show="activeSection === 'contact'">
    <h1>Contactez Moi</h1>
    <form id="contactForm" @submit.prevent="sendEmail">
      <label for="name">Nom:</label>
      <input
        type="text"
        id="Contact_form_name"
        name="name"
        v-model="form.name"
        required
      />

      <label for="email">Email:</label>
      <input
        type="email"
        id="Contact_form_email"
        name="email"
        v-model="form.email"
        required
      />

      <label for="message">Message:</label>
      <textarea
        id="Contact_form_message"
        name="message"
        v-model="form.message"
        required
      ></textarea>

      <input type="submit" value="Envoyer" />
    </form>
</section>
</template>

<script>
import { init, sendForm } from '@emailjs/browser'

export default {
    name: 'AppContact',
    props: {
        activeSection: String
    },
    data () {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    mounted () {
        init({
            publicKey: 'jUlSfo5L58DbuviOF'
        })
    },
    methods: {
        sendEmail () {
            sendForm('service_id6r038', 'template_ebveawj', '#contactForm')
            .then((response) => {
                alert('Message envoyé avec succès !')
                this.form = { name: '', email: '', message: '' }
            })
            .catch((error) => {
                alert("Erreur lors de l'envoi du message: ", error)
            })
        }
    }
}

</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
}

h1 {
    color: rgb(16, 145, 196);
    margin-bottom: 1em;
    font-size: 2em;
}

form {
    display: flex;
    flex-direction: column;
    padding: 2em;
    border: 0.16em solid rgb(16, 145, 196);
    border-radius: 1em;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

label {
    color: rgb(16, 145, 196);
    font-size: 1em;
    margin-bottom: 0.5em;
}

input[type="text"],
input[type="email"],
textarea {
    padding: 1em;
    margin-bottom: 1em;
    border: 0.1em solid rgb(16, 145, 196);
    border-radius: 0.5em;
    background-color: rgb(245, 245, 245);
    color: black;
    font-size: 1em;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    border-color: rgb(16, 145, 196);
    outline: none;
}

input[type="submit"] {
    padding: 1em;
    background-color: rgb(16, 145, 196);
    color: white;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
    background-color: rgb(11, 104, 146);
}

textarea {
    resize: vertical;
    min-height: 100px;
}
</style>
