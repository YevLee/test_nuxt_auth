<template>
  <div>
      <input type="text" v-model="userName" placeholder="用户名" /> <br />
      <input type="text" v-model="password" placeholder="密码" /> <br />
      <input type="button" value="登录" @click="login"/>
  </div>
</template>
<script>
export default {
  middleware: [
    'no-auth'
  ],
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('auth/login', {
        fields: {
          userName: this.userName,
          password: this.password
        }
      })
      if (this.$store.getters['auth/loggedIn']) {
        console.log('登录成功')
        this.$router.push('/')
      } else {
        console.log('登录失败')
      }
    }
  }
}
</script>
