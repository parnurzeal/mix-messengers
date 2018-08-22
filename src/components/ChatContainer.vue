<template>
  <div class="chat-container">
    <div class="heading">
      <h1>{{ title + uuid }}</h1>
    </div>
    <div class="body">
      <div class="box left-box">
        <friend-list></friend-list>
      </div>
      <div class="box right-box">
          <chat-log></chat-log>
          <message-input></message-input>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import FriendList from '@/components/FriendList';
import ChatLog from '@/components/ChatLog';
import MessageInput from '@/components/MessageInput';

export default {
  name: 'chat-container',
  components: {
    FriendList,
    ChatLog,
    MessageInput,
  },
  data() {
    return {
      title: 'PubNub ChatEngine and Vue - User: ',
    };
  },
  computed: {
    ...mapGetters({
      uuid: 'getMyUuid',
    }),
  },
};
</script>
<style scoped>
.chat-container {
  display: table;
  max-width: 750px;
  min-width: 300px;
  width: 100%;
  height: 550px;
  margin: auto;
  background-color: #FFFFFF;
  border: solid 1px #BFBFBF;
  border-radius: 3px;
}

.heading {
  display: table-row;
  height: 5%;
}

.body {
  display: table;
  height: 100%;
  width: 100%;
}

.box {
  display: table-cell;
}

.left-box {
  width: 20%;
  background-color: darkgrey;
}

.right-box {
  background-color: lightgrey;
}
</style>
