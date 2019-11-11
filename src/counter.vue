<template>
  <v-content>
    <v-container>
      <v-card class="mx-auto" color="blue-grey" dark max-width="360">
        <v-card-text class="headline font-weight-bold">Hello world 👋</v-card-text>
        <v-card-actions class="counter white blue-grey--text text--darken-3">
          <v-layout align-center justify-center>
            <strong class="counter-label">Counter:</strong>
            <v-btn @click="decrement" color="pink" flat icon>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            <span class="counter-state">{{ count }}</span>
            <v-btn @click="increment" color="light-green" flat icon>
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
const MIN = 0;
const MAX = 10;

export default {
  name: 'counter',
  data: () => ({ count: 0 }),
  methods: {
    increment() {
      if (this.count < MAX) {
        this.count += 1;
        return true;
      }
      return this.$swal({ icon: 'warning', text: 'Upper limit reached!' });
    },
    decrement() {
      if (this.count > MIN) {
        this.count -= 1;
        return true;
      }
      return this.$swal({ icon: 'warning', text: 'Lower limit reached!' });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: inherit;
}

.v-card {
  font-family: "Google Sans";
}

.counter {
  padding: 2rem 1rem;
  font-size: 1.5rem;
  font-family: "Roboto";

  &-label {
    margin-right: 0.5rem;
  }

  &-state {
    display: inline-block;
    min-width: 2rem;
  }
}
</style>
