<template>
  <div>
    <article @click="showDetails = !showDetails">
      <div>
        <h3>{{ account.holderName }}</h3>
        <p class="number">{{ account.accountNumber }}</p>
      </div>
      <p class="balance">
        {{ balance }}
      </p>
    </article>

    <AccountDetails
      v-if="showDetails"
      :accountNumber="account.accountNumber"
      :currencyCode="account.currencyCode"
    />
  </div>
</template>

<script>
import AccountDetails from "./AccountDetails.vue";

const getFormattedCurrency = (number, currency) => {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: currency,
  }).format(number);
};

export default {
  name: "Account",
  components: {
    AccountDetails: AccountDetails,
  },
  props: {
    account: Object,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    balance() {
      return this.account.balance
        ? getFormattedCurrency(this.account.balance, this.account.currencyCode)
        : getFormattedCurrency(
            this.account.bookBalance,
            this.account.currencyCode
          );
    },
  },
};
</script>

<style scoped>
article {
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid rgba(0 0 0 / 12%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
}

article:hover {
  background-color: #eee;
}

h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
}

.number {
  color: #777;
}

.balance {
  font-size: 1.25rem;
}
</style>