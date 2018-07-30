<template>
  <div id="container">
    <div>
      <label 
        tabindex="0" 
        for="uploader" 
        class="btn">{{ buttonText }}</label>
      <input 
        type="file" 
        accept="image/*" 
        name="image" 
        id="uploader" 
        class="input-file" 
        @change="getFile"/>
      <textarea
          name="caption"
          value="no Caption"
          placeholder="Add Your Caption"
          v-model="caption"
          class="caption-text"></textarea>
      <button
        class="btn"
        @click="submitFile">Send</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Upload',

  data() {
    return {
      file: '',
      caption: '',
      buttonText: 'Select a file ...'
    }
  },

  methods: {
    getFile(event) {
      this.file = event.target.files[0]
      this.buttonText = (this.file.name.length > 30) ? this.file.name.slice(0,30) + '.. .' : this.file.name
    },

    submitFile() {
      const file = this.file
      if (file === '') return alert('Please Select Image!')

      const caption = this.caption
      
      /* type cheking in front*/
      const allowedExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
      const extension = file.name.split('.').pop()
      const isAcceptable = allowedExtension.indexOf(extension) !== -1;

      if (isAcceptable) {
        this.send({'file': file, 'caption': caption})
        this.$emit('state', 'update')
        this.caption = ''
        this.buttonText = 'Select a file ...'
        this.file = ''
      }
      else {
        alert(`Sorry we don't support this type of *.${extension} Files yet!`)
        this.buttonText = 'Select a file ...'
        this.file = ''
      }
    }
  },

  props: {
    send: Function,
  }

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
    top: 0; left: 0;
    opacity: 0;
    visibility: hidden;
    padding: 14px 0;
    cursor: pointer;
  }
  .input-file + label  {
    font-size: 1em;
    font-weight: 700;
    color: white;
    width: 85%;
  }
  .caption-text {
    background-color: rgb(46, 55, 63);
    
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    color: #cbc7e5;
    font-size: 14px;
    width: 85%;
    padding: 5px 10px;
    outline: none;
    min-height: 70px;
    margin: 10px auto;
    overflow: hidden;
  }
  ::-webkit-input-placeholder { /* Chrome */
    color: #b3afc0;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #b3afc0;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #b3afc0;
    opacity: 1;
  }
  :-moz-placeholder { /* Firefox 4 - 18 */
    color: #b3afc0;
    opacity: 1;
  }
  .btn {
    display: block;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
    background-color: #c0b3a0;
    color: #22252c;
    cursor: pointer;
    margin: 5px auto;
    outline: none;
    padding: 6px 15px;
  }
  .btn:hover {
    background-color: #E14F60;
    box-shadow: 0 1px 2px rgb(51, 56, 67);
  }
</style>
