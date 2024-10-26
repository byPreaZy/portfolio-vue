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
      activeSection: 'about'
    };
  },
  methods: {
    updateSection(section) {
      console.log('Section active:', section);
      this.activeSection = section;
      this.$router.push(`/${section}`);
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

main {
  flex-grow: 1;
  max-width: 90%;
  margin: 0 auto;
}
</style>
