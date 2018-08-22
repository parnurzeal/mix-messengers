<template>
  <div id="app">
    <chat-container/>
  </div>
</template>

<script>
import ChatContainer from '@/components/ChatContainer';

export default {
  name: 'App',
  components: {
    ChatContainer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
