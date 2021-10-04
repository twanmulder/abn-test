import { render, screen } from "@testing-library/vue"

import AccountGroup from "../../src/components/AccountGroup.vue"

const name = "Current Accounts"
const accounts = [
    {
        "accountNumberType": "IBAN",
        "accountNumber": "NL18ABNA5476393838",
        "productName": "Current Account",
        "currencyCode": "EUR",
        "holderName": "John Doe",
        "bankCountryCode": "BE",
        "bankIdentifierCode": "ZYABBE20",
        "balance": 7500.39
    },
    {
        "accountNumberType": "IBAN",
        "accountNumber": "NL14ABNA4415260276",
        "productName": "Current Account",
        "currencyCode": "EUR",
        "holderName": "John Doe",
        "bankCountryCode": "BE",
        "bankIdentifierCode": "ZYABBE20",
        "balance": 3000.00
    }
]

test('Name of account group is present', () => {
    render(AccountGroup, {
        props: {name, accounts}
    })
    expect(screen.queryByText(name)).toBeTruthy()
})