# Coffee-Beans

Ethereum Dapp for Coffee Beans

## Getting started

1. [Start Ganache](https://www.trufflesuite.com/docs/ganache/quickstart)
2. Clone the reposotory

```bash
git clone https://github.com/rushikeshacharya/Coffee-Beans
cd Coffee-Beans
```

3. Install node dependencies

```bash
npm i
```

4.Compile and Migrate the contracts

```bash
truffle compile
truffle migrate
```

5. To run test cases

```bash
npm run test
```

6. To start the Web Application

```bash
npm run dev
```

7. Open below URL in the browser
   http://127.0.0.1:3000

8. To run code coverage report

```bash
truffle coverage
```

## Pre-requisite for using Web Application

1. Add Farmer
2. Add Distributor
3. Add Retailer
4. Add Consumer

- Note: Only the respective role accounts can add other users. i.e Only the Farmers can add other users as a Farmer and likewise.

## Software Configuration

---

- Node version: v12.16.1
- Truffle version: v5.1.19
- web3 version: v1.2.1

## UML Diagrams

---

- [Activity Diagram](https://github.com/rushikeshacharya/Coffee-Beans/blob/master/docs/Activity.png)
- [Sequence Diagram](https://github.com/rushikeshacharya/Coffee-Beans/blob/master/docs/Sequence.png)
- [State Diagram](https://github.com/rushikeshacharya/Coffee-Beans/blob/master/docs/State.png)
- [Class Diagram](https://github.com/rushikeshacharya/Coffee-Beans/blob/master/docs/Class.png)

---

- [Code coverage report](https://github.com/rushikeshacharya/Coffee-Beans/blob/master/docs/Code-coverage.png)

### Rinkeby Testnet Deployment

**SupplyChain Contract Address:** [0xb8a125237ba0c8c870775375dd317a18a2b78f0d](https://rinkeby.etherscan.io/address/0xb8a125237ba0c8c870775375dd317a18a2b78f0d)
