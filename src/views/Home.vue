<template>
  <md-content>
    <div class="title">
      <img src="https://vuematerial.io/assets/logo-color.png" />
      <div class="md-title">日语测试</div>
      <div class="md-body-1">Build beautiful apps with Vue.js</div>
    </div>

    <div class="form">
      <div class="md-center">
       <md-checkbox v-model="wordType" class="md-primary" value="1">平假名</md-checkbox>
       <md-checkbox v-model="wordType" class="md-primary" value="2">片假名</md-checkbox>
      </div>
      <div class="md-center">
       <md-checkbox v-model="difficulty" value="1">清音</md-checkbox>
       <md-checkbox v-model="difficulty" value="2">浊音</md-checkbox>
       <md-checkbox v-model="difficulty" value="3">拗音</md-checkbox>
      </div>
    </div>

    <div class="md-center">
      <md-button class="md-raised md-primary" @click="startTest">开始测试</md-button>
    </div>
  </md-content>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      wordType:["1"],
      difficulty:["1"],
    };
  },
  computed: {
    ...mapGetters([ "loading","showDialog","dialogContent" ])
  },
  methods: {
    ...mapMutations(["setLoading","setShowDialog","setDialogContent","setWordType","setDifficulty"]),
    startTest() {
      if(this.wordType.length==0 || this.difficulty.length==0){
        this.setShowDialog(true);
        this.setDialogContent("必选项不能为空!");
        return false;
      }
      this.setLoading(true);
      setTimeout(() => {
        this.setLoading(false);
        this.setWordType(this.wordType);
        this.setDifficulty(this.difficulty);
        this.$router.push('/about')
      }, 700);
    }
  }
};
</script>
<style>
.md-center{
  text-align:center;
}
.md-checkbox .md-checkbox-label {
  line-height: 22px;
  padding-left: 6px;
}
</style>
<style scoped >
.title {
  text-align: center;
  margin-bottom: 30px;
  font-family: cursive;
}
img {
  margin-bottom: 16px;
  max-width: 80px;
}
.form {
  margin-bottom: 60px;
}
.md-content {
  z-index: 1;
  width: 100%;
  max-width: 400px;
  position: relative;
  padding: 40px;
}
</style>
