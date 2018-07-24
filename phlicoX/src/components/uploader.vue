<template>
  <div id="container">
		<form
			ref='uploadForm'
			id='uploadForm'
      action='http://localhost:3000/upload'
      method='post'
      encType="multipart/form-data">
				<input type="file" accept="image/*" name="image" id="uploader" class="input-file" @change="getFile"/>
        <label tabindex="0" for="uploader" class="btn">Select a file...</label>
        <!--Should be fixed Json is not a good name-->
        <input type="hidden" name="hidden" :value="json()">
        <textarea
          name="caption"
          value="no Caption"
          placeholder="Add Your Caption"
          class="comment-text"></textarea>
    </form>
    <button
      class="btn"
      @click="submitFile()">Send</button>

    <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>

  </div>
</template>

<script>
import request from 'superagent'

export default {
  name: 'Upload',

  data() {
  	return {
  		file: '',
  		imageData: '',
  		testobject: {
  			name: 'ali',
  			wisid: 45
  		},
  	}
  },

  methods: {
  	getFile(event) {
  		this.file = event.target.files[0]
  		console.log(this.file)
  	},

  	json(){
  		console.log('my json file', JSON.stringify(this.testobject))
  		return JSON.stringify(this.testobject)
  	},
  	submitFile() {
  		const formData = new FormData();
			const domain = 'http://localhost:3000'

			formData.append("wisid", 1);
			formData.append("userid", 1);
			formData.append("username", "a");
			formData.append("image", this.file);

			request
				.post(domain + '/upload')
		    .send(formData)
		    .then((res) => {
		    	console.log('photo sent')
		    })
		    .catch((err) => {
		    	console.log(err)
		    })
			console.log("submit button clicked")
    },
  }
}
</script>

<style scoped>
  #container {
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 320px;
  }
  .input-file {
    position: absolute;
    top: 0; left: 0;
    opacity: 0;
    visibility: hidden;
    padding: 14px 0;
    cursor: pointer;
    background-color: red;
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
    background-color: #555f77;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
    color: #fff;
    cursor: pointer;
    margin: 5px auto;
    outline: none;
    padding: 6px 15px;
	}
	.btn:hover {
		background-color: #475077;
    box-shadow: 0 1px 2px rgb(51, 56, 67);
	}


  .sk-folding-cube {
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
    transform: scale(1.1) rotateZ(90deg);
  }
  .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
    transform: scale(1.1) rotateZ(180deg);
  }
  .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
    transform: scale(1.1) rotateZ(270deg);
  }
  .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  @-webkit-keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    } 25%, 75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      } 90%, 100% {
          -webkit-transform: perspective(140px) rotateY(180deg);
          transform: perspective(140px) rotateY(180deg);
          opacity: 0;
        }
  }
  @keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    } 25%, 75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      } 90%, 100% {
          -webkit-transform: perspective(140px) rotateY(180deg);
          transform: perspective(140px) rotateY(180deg);
          opacity: 0;
        }
  }

</style>
