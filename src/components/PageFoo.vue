<template>
  <div>
    <p>This is foo page.</p>
    <p>Count: {{ count }}</p>
    <p><button @click.prevent="increment({value: 1})">increment</button></p>
    <p>
      <button @click.prevent="asyncIncrement({value: 2})">
        async increment
      </button>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['message']),
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement']),
  },
};
</script>
