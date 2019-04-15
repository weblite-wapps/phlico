<template>
  <div class="card">
    <div class="loading" v-if="loadingData">
        <div class="ring"></div>
    </div>
    <div :style="card" v-else>
      <span
        id="heart"
        @click="changeLikeState"
        :class="{ unlike: !likeState, like: likeState }"
      >
        <i id="heart">favorite</i>
      </span>
    </div>

    <div class="icons">
      <div class="row">
        <div
          id="send"
          @click="sendToChat(imageName)"
        >
          <i>send</i>
        </div>

        <div
          id="comment"
          @click="changeState"
        >
          <i>insert_comment</i>
        </div>

        <div
          v-if="canDelete"
          @click="removePhoto"
          id="delete"
        >
          <i>delete</i>
        </div>
        <a
          id="download"
          :href="getOriginalPhoto()"
        >
          <i>get_app</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../config"
import { mapState } from 'vuex'
const { W } = window

export default {
  name: "card",

  props: {
    imageName: String,
    likeState: {
      default: false,
      type: Boolean,
    },
    canDelete: Boolean,
    sendToChat: Function,
    loadingData: Boolean,
  },

  data() {
    return {
      card: {},
    }
  },

  created() {
    console.log(this.loadingData)
    this.card = {
      backgroundImage: `url('${this.getPhoto()}')`,
      backgroundSize: "Contain",
      backgroundRepeat: "no-repeat",
      backgroundColor: "rgb(94,94,94)",
      width: "320px",
      height: "320px",
      margin: "10px 0",
    }
  },

  methods: {
    getPhoto() {
      return `${config.server}/img/Sqr_${this.imageName}`
    },

    getOriginalPhoto() {
      return `${config.server}/img/high_${this.imageName}`
      W.analytics("DOWNLOAD_PHOTO")
    },

    changeState() {
      this.$emit("state", "comments")
    },

    changeLikeState() {
      if (!this.likeState) this.$emit("like")
    },

    removePhoto() {
      this.$emit("del")
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
}
#heart {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}
.unlike:hover {
  opacity: 1;
}
.unlike {
  border: 1.3px solid white;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  opacity: 0.8;
  color: #fff;
  background-color: rgba(227, 38, 55, 0.63);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.7);
  text-shadow: 0 1.5px 0 rgba(0, 0, 0, 0.7);
}
.like {
  border: none;
  text-shadow: 1px 2px 1px rgba(208, 208, 208, 0.5);
  border-radius: 100px;
  width: 0px;
  height: 0px;
  color: #f70a31;
  opacity: 1;
}
.icons {
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 5px;
  color: #7d7878;
}
.right {
  display: flex;
  align-self: flex-end;
}
.left {
  display: flex;
  align-self: flex-start;
}
.icons a {
  text-decoration: none;
  color: #7d7878;
}
.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
#delete {
  transition: color 0.3s ease;
}
#delete:hover {
  color: #f93c2e;
}
#send {
  transition: color 0.3s ease;
}
#send:hover {
  color: #09832b;
}
#download {
  transition: color 0.3s ease;
}
#download:hover {
  color: #0a77b6;
}
#comment {
  transition: color 0.3s ease;
}
#comment:hover {
  color: #e17b0e;
}

.ring {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    padding: 10px;
    border: 5px dashed #4b9cdb;
    border-radius: 100%;
}

.loading .ring {animation: loadingD 1.5s .3s cubic-bezier(.17,.37,.43,.67) infinite;}

@keyframes loadingD {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
}

.loading {
  margin: 150px 0px;
}
</style>
