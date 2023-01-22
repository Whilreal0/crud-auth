

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
updatePassword,
} from "firebase/auth";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    updatePassword(state, newPassword){
      state.user.password = newPassword
    }
  },
  actions: {
    register({ commit }, { email, password }) {
      const auth = getAuth();
       createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login({ commit }, { email, password }) {
      const auth = getAuth();
     signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          commit("setUser", userCredential.user);
          commit("setIsAuthenticated", true);
          console.log(userCredential);
        }
      );
    },
    logout({ commit }) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("user logged out");
          commit("setUser", null);
          commit("setIsAuthenticated", false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delete({ commit }) {
      const auth = getAuth()
     auth.currentUser.delete().then(()=>{
        alert('Account Deleted')
        commit('setUser', null)
        commit('setIsAuthenticated', false)
      }).catch((error)=>{
        console.log(error)
      })
    },
    updatePassword({ commit }, newPassword ){
      const auth = getAuth()
      const user = auth.currentUser
      updatePassword(user, newPassword)
      .then(()=>{
        
        alert("password updated");
        commit('updatePassword', newPassword)
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  },
  modules: {},
});
