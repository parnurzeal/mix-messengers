<template>
  <div class="friend-list">
    friend-list
    <friend-list-item
      v-for="(conversation, index) of getDigestedList"
                      :name="conversation.displayParticipants"
                      :id="conversation.id"
                      >
    </friend-list-item>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import FriendListItem from '@/components/FriendListItem';
  
export default {
  name: 'friend-list',
  components: {
    FriendListItem,
  },
  data() {
    return {
    };
  },
  computed: {
    getDigestedList: function() {
      if (!this.conversations.data) return [];
      const digestedList = 
            this.conversations.data.map(elem => {
        const participantNames = elem.participants.data.map(person => person.name);
        elem.displayParticipants = participantNames.join(',');
        return elem;
      });
      console.log(digestedList);
      return digestedList;
    },
    ...mapGetters({
      conversations: 'getConversations',
    }),
  },
};
</script>
<style scoped>
.friend-list {
  background-color: violet;
}
/*.friend-list {
  position: relative;
  display: block;
  width: 250px;
  height: 100%;
  background: linear-gradient(141deg, #505D74 0%, #15223A 75%);
  float: left;
  overflow-y: scroll;
  border-radius: 0 0 0 3px;
}*/
</style>
