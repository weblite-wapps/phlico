<template>
  <div id="app" ref="appref" v-if="isLoaded === false">
    <Phlico
      v-for="item in phlicoz"
      :key="item.imageName"
      :imageName="item.imageName"
      :caption="item.caption"
      :creator="item.creator"
      :likes="item.likes"
      :comments="item.comments"
      :userInfo="{ userId, username }"
      :likeState="item.likeState"
      :updateLike="updateLike(item)"
      :sendToChat="sendToChat"
      :del="deletePhoto"
      :isLoaded="isLoaded"
    />

    <Splitter v-if="this.phlicoz.length">Upload</Splitter>

    <Uploader :send="addPhoto" :loading="isLoading"/>
  </div>
  <InitialLoading v-else/>
</template>

<script>
import Phlico from './components/phlico'
import Uploader from './components/uploader'
import Splitter from './helper/components/splitter'
import InitialLoading from './components/loading'
// helper
import webliteHandler from './helper/function/weblite.api'
import {
  savePhoto,
  deletePhoto,
  getAll,
  // addLike,
} from './helper/function/requestHandler'
const { W, R } = window

export default {
  name: 'App',

  data() {
    return {
      wisId: (W && W.wisId) || '1',
      userId: '',
      username: '',
      phlicoz: [],
      isLoading: false,
      isLoaded: true,
    }
  },

  components: {
    Uploader,
    Phlico,
    Splitter,
    InitialLoading,
  },

  created() {
    W && webliteHandler(this)
    !W && this.init()
  },

  methods: {
    init() {
      getAll(this.wisId).then(body => {
        if (body) {
          this.phlicoz = R.map(
            ({ imageName, comments, creator, likes, caption }) => ({
              imageName,
              comments,
              creator,
              caption,
              likes: R.length(R.uniq(likes)),
              likeState: R.findIndex(R.equals(this.userId), likes) !== -1,
            }),
            body,
          )
        }
        this.isLoaded = false
      })
    },

    addPhoto(photo) {
      const info = {
        wisId: this.wisId,
        userId: this.userId,
        creator: this.username,
      }
      W &&
        W.sendNotificationToAll(
          'Phlico',
          `${info.creator} Has added new image =)`,
        )
      this.isLoading = true
      savePhoto(info, photo)
        .then(res => {
          this.isLoading = false
          this.$refs.appref.scrollTop = 0
          this.phlicoz = R.prepend(res.body.doc, this.phlicoz)
        })
        .catch(console.log)
      W.analytics('UPLOAD_PHOTO')
    },

    deletePhoto(info) {
      deletePhoto(info).then(res => {
        this.phlicoz = R.reject(
          R.propEq('imageName', res.body.imageName),
          this.phlicoz,
        )
      })
      W.analytics('DELETE_PHOTO')
    },

    updateLike(phlico) {
      return () => {
        phlico.likeState = true
        phlico.likes = phlico.likes + 1
      }
    },

    sendToChat(imageName) {
      W.sendMessageToCurrentChat('wapp', {
        wappId: '5c950b8c7e208e68972d546c',
        customize: { imageName },
      })
      W.analytics('SNED_TO_CHAT')
    },
  },
}
</script>

<style scoped>
#app {
  width: 350px;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #22252c;
  overflow: auto;
}

#app::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 1px;
  width: 5px;
  background-color: #f5f5f5;
}

#app::-webkit-scrollbar {
  width: 4px;
  background-color: #fefefe;
}

#app::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #252a3e;
}
</style>
