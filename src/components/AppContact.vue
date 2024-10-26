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

</style>