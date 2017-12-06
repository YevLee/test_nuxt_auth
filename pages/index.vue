<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <nuxt-link v-if="!logined" to="/login">登录</nuxt-link>
      <div v-if="logined">
        {{ userInfo.phone }}
        <img :src="userInfo.imgUrl" />
        <br />
        <nuxt-link to="/profile">个人页面</nuxt-link>
        <span @click="logout">
          退出
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    Logo
  },
  computed: {
    ...mapState({
      userInfo: state => state.auth.user
    }),
    ...mapGetters({
      logined: 'auth/loggedIn'
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
