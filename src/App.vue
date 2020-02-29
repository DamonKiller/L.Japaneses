<template>
  <div id="app" class="centered-container">
      <router-view />
      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>
      <md-dialog-alert 
        :md-active.sync="copyShowDialog" 
        :md-content="dialogContent" />
    <div class="background" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  data(){
    return {
      copyShowDialog:false
    }
  },
  computed: {
    ...mapGetters([ "loading","showDialog","dialogContent" ])
  },
  methods:{
    ...mapMutations(["setLoading","setShowDialog","setDialogContent"]),
  },
  watch: {
    showDialog(newVal, oldVal) {
      this.copyShowDialog = newVal;
    },
    copyShowDialog(newVal,oldVal){
      this.setShowDialog(newVal);
    }
  }
};
</script>
<style scoped>
  .centered-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
  }
  .background {
    background: url(http://pic1.win4000.com/wallpaper/4/57b56337458f1.jpg);
    background-size: 100% 100%;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
