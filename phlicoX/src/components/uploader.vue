<template>
  <div id="container">
<!-- 	  <label 
	  	class="btn" 
	  	for="upload">Choose your picture</label>
	  <div>
	    <input class="file-input" type="file" id="upload"/>
	    <button class="btn upload" type="button" @click="submitFile">Upload File</button>
	    <button class="btn" type="button" >Reset</button>
	  </div>

	  <small>upload not implemented, just the file-selection</small>
		  <div class="input-file-container">  
		    <input
		    	class="input-file"
		    	type="file"
		    	id="file"
		    	@change="getFile">
		    <label
		    	tabindex="0"
		    	for="file"
		    	class="input-file-trigger"">
		    Select a file...</label>
		  </div>
  	<p class="file-return">"As"</p>
 -->		

		<form 
			ref='uploadForm'			
			id='uploadForm'
      action='http://localhost:3000/upload' 
      method='post' 
      encType="multipart/form-data">
				<input type="file" name="sampleFile" id="uploader" class="input-file" @change="getFile"/>
        <label tabindex="0" for="uploader" class="input-file-trigger">Select a file...</label>
        <input type="hidden" name="hidden" :value="json()">
        <textarea name="caption" value="no Caption"></textarea>
        <input type="submit" value="upload" />
		</form>

			<button @click="submitFile">new Send</button>
<!-- <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:3000/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="sampleFile" />
        <input type='submit' value='Upload!' />
    </form>
 -->
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
			const domain = 'http://localhost:3000'
			let filename = this.file
  		request
		    .post(domain + '/upload')
		    .attach("thefile", filename)
		    .catch(err => console.log(err))
		    .then(() => {console.log('i finished my job')})


		    // .send({name: filename})
			console.log("submit button clicked")
    },
  }
}
</script>

<style scoped>
.input-file-container {
  position: relative;
  width: 225px;
} 
.input-file-trigger {
  display: block;
  padding: 14px 45px;
  background: #39D2B4;
  color: #fff;
  font-size: 1em;
  transition: all .4s;
  cursor: pointer;
}
.input-file {
  position: absolute;
  top: 0; left: 0;
  width: 225px;
  opacity: 0;
  padding: 14px 0;
  cursor: pointer;
}
.input-file:hover + .input-file-trigger,
.input-file:focus + .input-file-trigger,
.input-file-trigger:hover,
.input-file-trigger:focus {
  background: #34495E;
  color: #39D2B4;
}

.file-return {
  margin: 0;
}
.file-return:not(:empty) {
  margin: 1em 0;
}
.file-return {
  font-style: italic;
  font-size: .9em;
  font-weight: bold;
}
.file-return:not(:empty):before {
  content: "Selected file: ";
  font-style: normal;
  font-weight: normal;
}







	#container {
		height: 100%;
		width: 100%;
		text-align: center;
	}
	small {
		color: rgba(0,0,0, .4);
	  display: block;
	  margin-top: 1em;
	}

	.file-input::-webkit-file-upload-button {
		/* visibility: hidden; */
	}
	.file-input + label  {
	  font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
	}
	.file-input{
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
		color: white;
	}

	.btn {
	  border: 0px solid rgba(0,0,0, .3);
		border-radius: 0px;
		border-bottom-width: 1px;
		margin: 10px auto;
		padding: 5px 5px;
		color: white;
		background-color: #428BCA;
	}
	.btn:hover {
		background-color: #206098;
	}
</style>