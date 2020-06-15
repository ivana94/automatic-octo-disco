<template>
  <div class="container">
    <div v-if="!first">
      <h1 class="title">
        Hey! 👋
      </h1>
      <h3>Tell me who you are:</h3>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          @click="handleClick(user.first)"
        >
          {{ user.first }}
        </li>
      </ul>
    </div>
    <div v-if="first">
      <h1 class="title">Hi {{ first }} 😊</h1>
      <p v-if="user.has_paid">
        You are debt-free. You've already paid {{ user.amount_owed }}. Thanks :)
      </p>
      <p v-else>
        You are not debt-free. You still owe {{ user.amount_owed }}. No rush!
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      first: "",
      user: {},
      users: []
    };
  },
  mounted: async function() {
    const { data } = await axios.get("/users");
    this.users = data;
  },
  methods: {
    handleClick: function(first) {
      this.first = first;
      this.user = this.users.filter(user => user.first === first)[0];
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
