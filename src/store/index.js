import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    postList: [
      { postID: 1, likes: 0, avatar: "avatar_user_1.jpg", date: "Aug 19,2021 15:00", text: "Hiiumaa... Dagö... the second largest island in Estonia" },
      { postID: 2, likes: 0, avatar: "avatar_user_1.jpg", image: "Kassari_sääretirp.png", date: "Aug 19,2021 15:30", text: "Hiiumaa: Kassari sääretirp..."  },
      { postID: 3, likes: 0, avatar: "avatar_user_1.jpg", image: "Kassari_2.jpg", date: "Aug 19,2021 15:59", text: "Hiiumaa: Kassari...alvars...where see and land meet..."  },
      { postID: 4, likes: 0, avatar: "avatar_user_1.jpg", image: "Kassari.jpg", date: "Aug 19,2021 15:59", text: "Hiiumaa: Kassari...alvars..."  },
      { postID: 5, likes: 0, avatar: "avatar_user_1.jpg", image: "Suuremõisa.jpg", date: "Aug 20,2021 11:00", text: "Hiiumaa: Suuremõisa...Grossenhof...and legendary Otto Reinhold Ludvig von Ungern-Sternberg..."  },
      { postID: 6, likes: 0, avatar: "avatar_user_1.jpg", image: "Kõpu_tuletorn.jpg", date: "Aug 21,2021 12:00", text: "Hiiumaa: Baltic lights... Kõpu..."  },
      { postID: 7, likes: 0, avatar: "avatar_user_1.jpg", image: "Tahkuna_tuletorn.jpg", date: "Aug 21,2021 17:08", text: "Hiiumaa: Baltic lights... Tahkuna..."  },
      { postID: 8, likes: 0, avatar: "avatar_user_1.jpg", image: "Vanajõgi.jpg", date: "Aug 22,2021 11:00", text: "Hiiumaa: Tahkuna Nature Reserve... Vanajõgi..."  },
      { postID: 9, likes: 0, avatar: "avatar_user_1.jpg", image: "Tihu_looduskaitseala.jpg", date: "Aug 22,2021 13:00", text: "Hiiumaa: Tahkuna Nature Reserve..."  },
      { postID: 10, likes: 0, avatar: "avatar_user_1.jpg", image: "Luidja.jpg", date: "Aug 23,2021 22:15", text: "Hiiumaa... an island surrounded by see... see, a giver and a taker..."  }
      ]
  },
  mutations: {
    IncreaseLikes(state, postID) {
      state.postList.find(item => item.postID === postID).likes += 1
    }
  },
  actions: {
    IncreaseLikesAct(act, postID) {
      setTimeout(function(){
        act.commit("IncreaseLikes", postID)
      }, 100)
    }
  },
  modules: {
  }
})
