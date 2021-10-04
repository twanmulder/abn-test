<template>
  <div>
    <AccountGroup
      v-for="accountGroup in accountGroups"
      :key="accountGroup.groupId"
      :name="accountGroup.groupName"
      :accounts="accountGroup.accounts"
    />
  </div>
</template>

<script>
import AccountGroup from "./components/AccountGroup.vue";

export default {
  name: "App",
  components: {
    AccountGroup: AccountGroup,
  },
  data() {
    return {
      accountGroups: null,
    };
  },
  mounted() {
    fetch("./accounts.json")
      .then((response) => response.json())
      .then((data) => (this.accountGroups = data.accountGroups));
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 6rem 1rem;
  color: #222;
  max-width: 800px;
  background-color: #f9f9f9;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
p {
  margin: 0;
}

sup {
  margin-left: 0.25rem;
  font-size: 0.75rem;
}
</style>
