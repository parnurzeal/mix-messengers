<template>
  <div class="message-bubble">
    <span>{{ from }}</span>
    <br>
    <span>{{ text }}</span>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'message-bubble',
  props: ['from', 'text', 'id', 'time'],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
    }),
  },
};
</script>
<style scoped></style>

