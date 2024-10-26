<template>
  <div class='home'>
    <AppHeader @show-section='updateSection' />
    <main>
      <router-view :activeSection="activeSection"></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';


export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      activeSection: 'about' // Définissez la section active par défaut
    };
  },
  methods: {
    updateSection(section) {
      console.log('Section active:', section);
      this.activeSection = section;
      this.$router.push(`/${section}`); // Utilisez des backticks pour la chaîne de caractères de template
    }
  }
}
</script>
