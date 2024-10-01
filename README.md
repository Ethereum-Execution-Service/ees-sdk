# ees-sdk

![npm version](https://img.shields.io/npm/v/sub2-sdk)
![license](https://img.shields.io/npm/l/sub2-sdk)

This is a Typescript/JavaScript SDK for interacting with EES (Ethereum Execution Service). The library is build using [viem](https://viem.sh) and requires a viem public client and wallet client to access most functions. Read more about usage of ees-sdk and see examples [here](https://sub2.gitbook.io/sub2/sdk).

## Installation

```sh
npm install ees-sdk
````

## Note

The EES protocol is currently only deployed on Base Sepolia (network id 84532). Providing any other network will cause an error.