import { render, screen } from "@testing-library/vue"

import Account from "../../src/components/Account.vue"

let account = {
    "accountNumberType": "IBAN",
    "accountNumber": "NL18ABNA5476393838",
    "productName": "Current Account",
    "currencyCode": "EUR",
    "holderName": "John Doe",
    "bankCountryCode": "BE",
    "bankIdentifierCode": "ZYABBE20",
    "balance": 7500.39
}

test('Account holder name is present', () => {
    render(Account, {
        props: {account}
    })
    expect(screen.queryByText(account.holderName)).toBeTruthy()
})

test('Account Number is present', () => {
    render(Account, {
        props: {account}
    })
    expect(screen.queryByText(account.accountNumber)).toBeTruthy()
})

account = {
    "accountNumberType": "IBAN",
    "accountNumber": "NL18ABNA5476393838",
    "productName": "Current Account",
    "currencyCode": "EUR",
    "holderName": "John Doe",
    "bankCountryCode": "BE",
    "bankIdentifierCode": "ZYABBE20",
    "bookBalance": 7500.39
}

test('Render different (book)balance', () => {
    render(Account, {
        props: {account}
    })
    expect(screen.queryByText(account.accountNumber)).toBeTruthy()
})