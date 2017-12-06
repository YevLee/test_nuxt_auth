<template>
  <div>
    个人页面，这个页面只有登录后才能打开
  </div>
</template>
<script>
export default {
  middleware: ['auth']
}
</script>
