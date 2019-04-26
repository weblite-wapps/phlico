<template>
  <div id="container">
    <label for="uploader" class="btn">{{ buttonText }}</label>

    <input type="file" accept="image/*" id="uploader" class="input-file" @change="getFile">

    <textarea
      dir="auto"
      placeholder="Add Your Caption"
      v-model="caption"
      @keyup.ctrl.enter="submitFile"
      class="caption-text"
    />

    <div class="footer">
      <button class="btn" @click="submitFile">Send</button>
      <div class="loading" v-if="loading">
        <div class="ring"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Upload',

  props: {
    send: Function,
    loading: Boolean,
  },

  data() {
    return {
      file: null,
      caption: '',
    }
  },

  computed: {
    buttonText() {
      if (!this.file) return 'Select a file ...'
      return this.file.name.length > 30
        ? this.file.name.slice(0, 30) + '.. .'
        : this.file.name
    },

    isFileValid() {
      const allowedExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp']
      const extension = this.file.name
        .toLowerCase()
        .split('.')
        .pop()
      return allowedExtension.indexOf(extension) !== -1
    },
  },

  methods: {
    getFile(event) {
      this.file = event.target.files[0]
    },

    submitFile() {
      if (this.file && this.isFileValid) {
        this.send({ file: this.file, caption: this.caption })
        this.$emit('state', 'update')
        this.caption = ''
      }

      this.file = null
    },
  },
}
</script>

<style scoped>
#container {
  text-align: center;
  width: 320px;
  height: auto;
  margin: 30px auto 0 auto;
}

.input-file {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  padding: 14px 0;
  cursor: pointer;
}

.input-file + label {
  font-size: 1em;
  font-weight: 700;
  color: white;
  width: 85%;
}

.caption-text {
  background-color: rgb(46, 55, 63);
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  color: #cbc7e5;
  font-size: 14px;
  width: 85%;
  padding: 5px 10px;
  outline: none;
  min-height: 70px;
  margin: 10px auto;
  overflow: hidden;
}

::-webkit-input-placeholder {
  /* Chrome */
  color: #b3afc0;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #b3afc0;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #b3afc0;
  opacity: 1;
}
:-moz-placeholder {
  /* Firefox 4 - 18 */
  color: #b3afc0;
  opacity: 1;
}

.btn {
  display: block;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  background-color: #c0b3a0;
  color: #22252c;
  cursor: pointer;
  margin: 5px 0px;
  outline: none;
  padding: 6px 15px;
}

.btn:hover {
  background-color: #e14f60;
  box-shadow: 0 1px 2px rgb(51, 56, 67);
}

.ring {
  width: 7px;
  height: 7px;
  margin: 0 auto;
  padding: 10px;
  border: 2px dashed #4b9cdb;
  border-radius: 100%;
}

.loading .ring {
  animation: loadingD 1.5s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}

@keyframes loadingD {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  margin-top: 5px;
  margin-left: 10px;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>
