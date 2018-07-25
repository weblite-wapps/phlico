<template>
  <div id="get-comment">
    <div id="caption">
      <div class="caption-text">
        <p>{{caption.text}}</p>
      </div>

      <div class="bot">
        <span>{{caption.likes}} ❤</span>
        <span class="username">{{caption.username}}</span>
      </div>
    </div>

    <form
      action=""
      class="form"
      name="form">
      <div class="form-row">
        <textarea
          class="comment-text"
          placeholder="Add comment..."
          required></textarea>
      </div>
      <div class="form-row">
        <!--submit form using superagent-->
        <button @click="">Submit</button>
        <!--return to main inline application-->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'getComments',

  props: {
    caption: Object,
  }
}
</script>

<style scoped>
  #caption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 5px 0;
  }
  .bot {
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .username {
    color: #cfccd0;
    background-color: #2c3e50;
    padding: 0 8px;
    margin-left: 20px;
    border-radius: 20px;
    font-size: 10px;
  }
  .caption-text {
    /*display: inline-block;*/
    display: flex;
    word-wrap: break-word;
    color: #333333;
    text-align: center;
  }

  #get-comment {
    width: 100%;
    height: auto;
    /*background-color: rgba(45, 71, 42, 0.19);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form .form-row .comment-text {
   background-color: rgba(49, 58, 67, 0.84);
   border: none;
   border-radius: 4px;
   box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
   color: #cbc7e5;
   font-size: 14px;
   padding: 5px 10px;
   outline: none;
   width: 340px;
  }
  .form .form-row  input[type=submit],
  .form .form-row  button {
    background-color: #555f77;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: #fff;
    cursor: pointer;
    display: block;
    margin: 5px auto;
    outline: none;
    padding: 6px 15px;
  }
  .form .form-row .comment-text:focus,
  .form .form-row input[type=submit]:hover,
  .form .form-row button:hover{
    box-shadow: 0 2px 6px rgb(83, 94, 105);
  }
  .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px
  }
  .comment-text {
    min-height: 60px;
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
</style>
