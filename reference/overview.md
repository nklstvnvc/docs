---
id: overview
title: Overview
slug: /
---

The Attrace architecture consists of a couple of key components, that interact with each other and define together the full Attrace Referral Network. The aim is for all critical components run in a decentralised space, meaning on a blockchain or P2P network, and outside the purview and control of a single authority.

This overview explains the design of Attrace, and how it is used to implement the Attrace Referral Marketplace.


## Lifecycle
Below a simplistic lifecycle based on three main actors, being the seller, promoter and buyer.

![Software stack](/reference/lifecycle.svg)
1. The [Seller](/reference/glossary#seller) registers a [Referrable](/reference/glossary#referrable) on the network, which includes the tokenized asset to sell. 
1. Now the [Promoter](/reference/glossary#promoter) decides it wants to promote this referrable. He pays the network fee, and the Referral Token is minted on the blockchain by the ReferralMarket contract. [(Check on Gitlab)](https://gitlab.com/attrace/referral-contracts/-/blob/master/contracts/ReferralMarketUpgradeable.sol#L161).
1. With this On-chain Referral Token, the Promoter can create a redirect page which it can share with the potential [Buyers](/reference/glossary#buyer). It is recommended to choose for a decentralised solution here as well. Attrace recommends using IPFS, an example of a redirect page can be [found here on Gitlab](https://gitlab.com/attrace/redirect-page).
1. The Buyer browses to this redirect page where the cashback bounty is shown. When the Buyer signs with his crypto wallet, the Minable Conversion Token is being generated within his browser. Minable in this context means, that the information is encrypted with a weak protection, to ensure a form of privacy. This is being posted and stored on the Verifier Nodes.
1. The Verifier Nodes are monitoring transaction log of the blockchain with the tokenized asset to sell. When the asset changes hand, from Seller to Buyer. Nodes will look-up if there is an associated Minable Conversion Token. If so, the slow hash is cracked, and it can identify the promoter(s).
1. The Verifier Node distributes the bounty over the Buyer and Promoter.

:::info
The On-chain Referral Token does not strictly require user interaction, and can programmatically minted and used.
:::info 

## Marketplace Technical User Flow
Below you can find the referral marketplace user flow. 

![Software stack](/reference/userflow.svg)
:::note
The tokenized asset that is being promoted can be at any public blockchain. Currently Attrace supports Ethereum, but more chains are on the [roadmap](/roadmap/).
:::note

### Steps
1. Seller registers its digital asset, like for instance a NFT, on the referral marketplace.
1. Seller deposits the bounty for selling his asset in the Attrace marketplace contract (on the native blockchain, like for instance Ethereum).
1. Promoter decides he wants to promote this item. The contract mints a primary referral token, the promoter gets a referral page link to share with the potential buyers (hosted decentralised on IPFS)
1. Buyer lands the referral page, the secondary referral token is minted and stored in the Attrace Verifier Nodes network. In order to claim a cashback (in the same currency as the digital asset that is sold), he needs to connect and sign through his crypto wallet.
1. The digital asset is sold, and changes hands from seller to the buyer.
1. The Attrace Verifier Nodes, a special decentralised observing network, notifies the change of hand.
1. Based on the stored secondary referral token, the miner can calculate the promoter.
1. Funds are released from the contract to both the buyer and promoter.

## Technical design
!WIP!
![Overview](/reference/overview.png)


