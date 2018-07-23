<template>
  <div id="get-comment">
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
        <input type="submit" name="Add Comment">
        <!--return to main inline application-->
        <button @click="">Cancle</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comments',
  data() {return {}}
}
</script>

<style scoped>
  #get-comment {
    width: 400px;
    height: 400px;
    background-color: rgba(45, 71, 42, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form .form-row .comment-text {
   background-color: rgba(49, 58, 67, 0.84);
   border: none;
   border-radius: 4px;
   box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
   color: #b3afc0;
   font-size: 14px;
   padding: 5px 10px;
   outline: none;
   width: 370px;
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
    box-shadow: 0 2px 6px rgba(121, 137, 148, 1);
  }
  .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px
  }
  .comment-text {
    min-height: 250px;
  }
</style>
