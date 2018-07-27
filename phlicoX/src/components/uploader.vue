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
          class="comment-text"></textarea>
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
  	getFile: function(event) {
  		this.file = event.target.files[0]
      this.buttonText = (this.file.name.length > 30) ? this.file.name.slice(0,30) + '...' : this.file.name
  	},

  	submitFile: function() {
  	  const file = this.file
      const caption = this.caption
  	  this.send({'file': file, 'caption': caption})
      this.$emit('state', 'update')
      this.caption=""
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
  .has-contnet {
    background-color: #;
  }
  .input-file:hover,
  .input-file:focus {
    background: #34495E;
    color: #39D2B4;
  }
	.file-input + label  {
	  font-size: 1em;
    font-weight: 700;
    color: white;
    background-color: black;
    width: 85%;
	}
  .comment-text {
    background-color: rgba(49, 58, 67, 0.84);
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: #cbc7e5;
    font-size: 14px;
    width: 85%;
    padding: 5px 10px;
    outline: none;
    min-height: 70px;
    margin: 10px;
    overflow: hidden;
  }
  .comment-text:focus {
    box-shadow: 0 2px 6px rgba(121, 137, 148, 1);
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
    color: #fff;
    background-color: #34495E;
    cursor: pointer;
    margin: 5px auto;
    outline: none;
    padding: 6px 15px;
	}
	.btn:hover {
		background-color: #475077;
    box-shadow: 0 1px 2px rgb(51, 56, 67);
	}
</style>
