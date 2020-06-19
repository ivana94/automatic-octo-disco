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
export default {
  data: function() {
    return {
      first: "",
      user: {},
      users: []
    };
  },
  mounted: async function() {
    this.users = [
      {
        id: 1,
        first: "Tom",
        amount_owed: 60.98,
        has_paid: false,
        timestamp: "2020-06-15T15:38:28.421Z"
      },
      {
        id: 2,
        first: "K",
        amount_owed: 23.88,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.423Z"
      },
      {
        id: 3,
        first: "Loretta",
        amount_owed: 23.88,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.424Z"
      },
      {
        id: 4,
        first: "Matt",
        amount_owed: 23.88,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.425Z"
      },
      {
        id: 5,
        first: "Andrea",
        amount_owed: 23.88,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.426Z"
      },
      {
        id: 6,
        first: "Merle",
        amount_owed: 23.88,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.427Z"
      },
      {
        id: 7,
        first: "Leo",
        amount_owed: 60.98,
        has_paid: false,
        timestamp: "2020-06-15T15:38:28.428Z"
      },
      {
        id: 8,
        first: "Jake",
        amount_owed: 60.98,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.429Z"
      },
      {
        id: 9,
        first: "Giordana",
        amount_owed: 60.98,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.430Z"
      },
      {
        id: 10,
        first: "Maja",
        amount_owed: 39.18,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.431Z"
      },
      {
        id: 11,
        first: "Woyti",
        amount_owed: 75.18,
        has_paid: true,
        timestamp: "2020-06-15T15:38:28.432Z"
      },
      {
        id: 12,
        first: "Victoria",
        amount_owed: 39.18,
        has_paid: false,
        timestamp: "2020-06-15T15:38:28.433Z"
      },
      {
        id: 13,
        first: "Ivana",
        amount_owed: null,
        has_paid: false,
        timestamp: "2020-06-15T17:33:38.124Z"
      }
    ];
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
  min-height: 85vh;
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
  width: 150px;
  height: 80px;
  margin: 5px 0;
  border: 2px solid #acbed8;
  background: #e8ebf7;
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
  font-size: 48px;
  color: black;
  letter-spacing: 1px;
  border-bottom: 1px solid black;
}

.subtitle {
  font-weight: 300;
  font-size: 28px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
