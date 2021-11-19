import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    postList: [
      { postID: 1, likes: 0, date: "Nov 19, 2021 05:02", text: "A post should have the same structure as previous homework, but it has to be a component that relies on Vuex global store to acquire/fetch its content information (3 points)." },
      { postID: 2, likes: 0, image: "Kassari_sääretirp.png", date: "Aug 19,2021 15:30", text: "Hiiumaa: Kassari sääretirp"  },
      { postID: 3, likes: 0, avatar: "avatar_user_1.jpg", image: "Kassari_2.jpg", date: "Aug 19,2021 15:59", text: "Hiiumaa: Kassari...alvars...where see and land meet..."  }
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
