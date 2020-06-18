<template>
  <div class="container">
    <div v-if="!first">
      <h1 class="title">
        Hey! 👋
      </h1>
      <h3 class="subtitle">Tell me who you are:</h3>
      <ul class="user-container">
        <li
          v-for="user in users"
          :key="user.id"
          @click="handleClick(user.first)"
          class="user"
        >
          {{ user.first }}
        </li>
      </ul>
    </div>
    <div v-if="first">
      <h1 class="title">Hi {{ first }} 😊</h1>
      <h3>
        See you tomorrow, 6:15am, Berlin Hbf Platform 4
      </h3>
      <h5 class="subtitle" v-if="!user.has_paid">amount owed:</h5>
      <p v-if="!user.has_paid">
        {{ user.amount_owed }}. Please send money by July 10th (this is when my
        credit card bill is due!)
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const instance = axios.create({
  baseURL: "https://0.0.0.0:23799"
});
export default {
  data: function() {
    return {
      first: "",
      user: {},
      users: []
    };
  },
  mounted: async function() {
    const { data } = await instance.get("/users");
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
}

.user-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  height: 50vh;
}

.user {
  width: 220px;
  height: 80px;
  margin: 5px 0;
  border: 2px solid #39b982;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  border-bottom: 1px solid #526488;
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
