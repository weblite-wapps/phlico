<template>
  <div>
    <div :style="blur" />

    <div
      @click.self="switchMode"
      v-show="isLoaded"
      :style="image"
    />

    <!--Heart-->
    <span id="heart" @click="changeState('like')" :class="heartClass">
      <i>favorite</i>
    </span>

    <!--Notification-->
    <span :class="navPopUpsClass">
      <img
        src="../assets/logo/comment.png"
        v-on:load="onLoadHandler"
        id="comment-icon"
        @click="changeState('comments')"
      />
    </span>

    <InitialLoading v-show="!isLoaded"/>
  </div>
</template>

<script>
import config from '../config'
import InitialLoading from './loading'

const domain = config.server
const { W } = window

export default {
  name: 'card',

  props: {
    imageName: String,
    likeState: {
      type: Boolean,
      required: true,
    },
    mode: String,
  },

  data() {
    return {
      image: {
        backgroundImage: `url('${this.getPhoto}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: this.mode === 'inline' ? '320px' : '100%',
        height: this.mode == 'inline' ? '320px' : '100%',
        margin: 'auto',
      },
      isLoaded: false,
    }
  },

  components: {
    InitialLoading,
  },

  computed: {
    heartClass() {
      return this.likeState ? 'like' : 'unlike'
    },

    navPopUpsClass() {
      return this.mode === 'inline' ? 'nav' : 'nav'
    },

    getPhoto() {
      return this.mode === 'inline'
        ? `${domain}/img/Sqr_${this.imageName}`
        : `${domain}/img/high_${this.imageName}`
    },
  },

  methods: {
    changeState(event) {
      if (event === 'like' && !this.likeState) this.$emit('like')
      if (event === 'comments') this.$emit('state', event)
    },

    switchMode() {
      W && W.changeModeTo('fullscreen')
      W && W.analytics('CHANGE_MODE', { from: this.mode })
    },

    onLoadHandler() {
      this.isLoaded = true
    },
  },

  watch: {
    imageName: {
      handler() {
        this.image = {
          backgroundImage: `url('${this.getPhoto}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: this.mode === 'inline' ? '320px' : '100%',
          height: this.mode == 'inline' ? '320px' : '100%',
          position: this.mode !== 'inline' && 'absolute',
          overflow: 'hidden',
        }
        this.blur = {
          backgroundImage: `url('${this.getPhoto}')`,
          filter: 'blur(8px)',
          '-webkit-filter': 'blur(8px)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: this.mode !== 'inline' && 'absolute',
          width: '100%',
          height: '100%',
        }
      },
      immediate: true,
    },
  },
}
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
.nav {
  z-index: 2;
  position: fixed;
  bottom: 10px;
  left: 10px;
}
#heart {
  position: fixed;
  top: 10px;
  left: 10px;
  margin: 15px;
  transition: all .3s;
  z-index: 2;
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
