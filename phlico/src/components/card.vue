<template>
  <div :style="card" @click.self="switchMode">
    <!--Heart-->
    <span id="heart" @click="changeState('like')" :class="heartClass">
      <i>favorite</i>
    </span>
    <!--Notification-->
    <span :class="navPopUpsClass">
      <img src="../assets/logo/comment.png" id="comment-icon" @click="changeState('comments')">
    </span>
  </div>
</template>

<script>
import config from "../config";

const domain = config.server;
const { W } = window;

export default {
  name: "card",

  props: {
    imageName: String,
    likeState: {
      type: Boolean,
      required: true
    },
    mode: String
  },

  data() {
    return {
      card: {
        backgroundImage: `url('${this.getPhoto}')`,
        backgroundSize: "Contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgb(94,94,94)",
        width: this.mode == "inline" ? "400px" : "100%",
        height: this.mode == "inline" ? "400px" : "100%"
      }
    };
  },

  computed: {
    heartClass() {
      return this.likeState ? "like" : "unlike";
    },

    navPopUpsClass() {
      return this.mode === "inline" ? "navInline" : "navFullscreen";
    },

    getPhoto() {
      return this.mode === "inline"
        ? `${domain}/img/Sqr_${this.imageName}`
        : `${domain}/img/high_${this.imageName}`;
    }
  },

  created() {},

  methods: {
    changeState(event) {
      if (event === "like" && !this.likeState) this.$emit("like");
      if (event === "comments") this.$emit("state", event);
    },

    switchMode() {
      W && W.changeModeTo("fullscreen");
    }
  },

  watch: {
    imageName() {
      this.card = {
        backgroundImage: `url('${this.getPhoto}')`,
        backgroundSize: "Contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgb(94,94,94)",
        width: this.mode == "inline" ? "400px" : "100%",
        height: this.mode == "inline" ? "400px" : "100%"
      };
    }
  }
};
</script>

<style scoped>
#heart {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 15px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.unlike:hover {
  opacity: 1;
}
.unlike {
  border: 1.3px solid #f7f7f7;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  opacity: 0.8;
  color: #fff;
  background-color: rgba(227, 38, 55, 0.63);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.7);
  text-shadow: 0 1.5px 0 rgba(0, 0, 0, 0.7);
}
.like {
  border: 1px solid white;
  text-shadow: 1px 2px 1px rgba(208, 208, 208, 0.5);
  border-radius: 100px;
  width: 0.1px;
  height: 0.1px;
  color: #f70a31;
  opacity: 1;
}
.navInline {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  bottom: -85%;
  margin: 0 auto;
}
.navFullscreen {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  bottom: -92%;
  margin: 0 auto;
}
#heart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}
#comment-icon {
  width: 40px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
