import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    showDialog:false,
    dialogContent:"",

    wordType:[],
    difficulty:[],
  },
  getters:{
    loading: state => state.loading,
    showDialog: state => state.showDialog,
    dialogContent: state => state.dialogContent,
    wordType: state => state.wordType,
    difficulty: state => state.difficulty,
  },
  mutations: {
    setLoading(state, val){
      state.loading = val;
    },
    setShowDialog(state, val){
      state.showDialog = val;
    },
    setDialogContent(state, val){
      state.dialogContent = val;
    },
    setWordType(state, val){
      state.wordType = val;
    },
    setDifficulty(state, val){
      state.difficulty = val;
    },
  },
})
