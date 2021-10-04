import { render } from "@testing-library/vue"
import AccountDetails from "../../src/components/AccountDetails.vue"

const accountNumber = "NL18ABNA5476393838"
const currencyCode = "EUR"

test('Transaction description is present', () => {
    render(AccountDetails, {
        props: {accountNumber,currencyCode}
    })
    expect(AccountDetails.queryByText(accountNumber)).toBeTruthy()
})

// Add testing coverage for methods and API calls

// Fetch is currently not defined, it's not available inside Node
// Will need to polyfill or mock a fetch to simulate a network request  
