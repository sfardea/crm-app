<template>
  <div class="login-container">
    <h1>Sign in</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="USERNAME" v-model="usrname">
        </div>
        <div>
          <input type="password" name="title" placeholder="PASSWORD" v-model="password">
        </div>
        <div>
          <button class="login-button" @click="login">Login</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await PostsService.login({
        username: this.username,
        password: this.password
      })
      this.$router.push({ name: 'Buildings' })
    }
  }
}
</script>
<style type="text/css">
.login-container {
  margin-top: 10rem;
}
.form input {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.login-button {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
