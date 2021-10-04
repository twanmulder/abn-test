<template>
  <section>
    <h2>{{ name }}</h2>
    <Account
      v-for="account in accounts"
      :key="account.accountNumber"
      :account="account"
    />
  </section>
</template>

<script>
import Account from "./Account.vue";
export default {
  name: "AccountGroup",
  components: {
    Account: Account,
  },
  props: {
    name: String,
    accounts: Array,
  },
};
</script>

<style scoped>
section {
  margin-top: 2rem;
  box-shadow: 0 2px 2px 0 rgb(34 34 34 / 8%);
}

h2 {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
  font-stretch: condensed;
  background: #00716b;
  color: #fff;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(0 0 0 / 12%);
}
</style>