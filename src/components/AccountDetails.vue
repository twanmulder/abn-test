<template>
  <div>
    <div
      class="transaction"
      v-for="transaction in transactions"
      :key="transaction.transactionId"
    >
      <div>
        <p class="counterparty">{{ transaction.counterpartyName }}</p>
        <p class="description">{{ transaction.description }}</p>
        <p class="date">{{ transaction.bookDate }}</p>
      </div>
      <p class="amount">
        {{ transaction.creditDebitIndicator === "DEBIT" ? "-" : "+" }}
        {{ getFormattedCurrency(transaction.amount, currencyCode) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountDetails",
  props: {
    accountNumber: String,
    currencyCode: String,
  },
  data() {
    return {
      transactions: null,
    };
  },
  methods: {
    getFormattedCurrency(number, currency) {
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: currency,
      }).format(number);
    },
  },
  mounted() {
    fetch(`./transactions_${this.accountNumber}.json`)
      .then((response) => response.json())
      .then((data) => (this.transactions = data.transactions));
  },
};
</script>

<style scoped>
.transaction {
  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.transaction:nth-child(odd) {
  background: #fafafa;
}

.counterparty {
  font-weight: 700;
}

.description {
  color: #777;
}

.date {
  color: #777;
}

.amount {
  font-size: 1.125rem;
}
</style>