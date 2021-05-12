---
id: referral-pages
title: Referral Pages
---

The referral page is a component of the referral network, which enables a promoter to share a link with their audience. The URL of this referral page typically contains an encoded [On-chain Referral Token](/reference/glossary#on-chain-referral-tokens), which is used to attribute the potential buyer to this promoter.

![Referral Page](/reference/referral-page.png)
1. A potential buyer opens the referral page, where it shows the tokenized asset it can buy, with the cashback it can earn.
1. The buyer decides it wants to continue, he is asked to sign with his crypto wallet, like for instance meta mask. At this moment, the Off-chain Referral Token is minted in the browser of the buyer, and posted to Verifier Nodes to store.
1. The buyer is redirected to the external marketplace or other place where it can acquire the tokenized asset.


:::note
Cashback can be in any cryptocurrency, but most common usage is the same currency as the asset that it wants to buy. 
:::note

## IPFS
Although you can host the referral page on any hosting, it is recommended to take a decentralised approach here as well to preserver the mindset and make sure there is no centralised authority or single point of failure. 

Therefore, the Attrace Referral Marketplace hosts its referral page at IPFS. This has a couple of advantages:
-  IPFS compliant browsers will use their preferred gateway/ipfs node (for example [Brave Browser](https://brave.com/)).
-  Promoters can fork the [referral page repository](https://gitlab.com/attrace/redirect-page) customize their click-out pages.

:::info
The InterPlanetary File System (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. More information can be found on [https://ipfs.io/](https://ipfs.io/).
:::note

The source code of the redirect page used by the referral marketplace can be found in this [referral page repository](https://gitlab.com/attrace/redirect-page). 
This repository is automatically deployed:
- Attrace.net: used for `testnet`.
- Attrace.eth: used for `production`.

A testnet referral example page [can be found here](https://ref.testnet.attrace.net/?ATPMRFEIR2PMREGIR2PMREKUSDG4ZDCIR2PMREGIR2EIYHQMZQG4ZTMY3EMRSGKZBVGM4TEMDDMRRGMNTEMFRGMZBTGA3DOYZUMRRTEZRVGQ3TKIRMEJKCEORCGIRCYISTEI5CEMDYMZQWENBTG5SDIYTBMU2TAMZUHE4DIMJSMNRGCZTBGIYGKNJUMU4WMMBYMI3TSZTGEJ6X2LBCKARDU6ZCIMRDUIRQPA4TENRTGYZGENBVGFATAMJSIY3TEYRTGQZDIMCGGM3EGM3CIRRTCNRTMQ2DMMTFGARCYISWEI5HWITUPFYGKIR2EJBGSZ2OOVWWEZLSEIWCE2DFPARDUIRQPAYDMNRVGE3TEOBZHA4DAMBQEJ6SYISLEI5DC7JMEJJSEOT3EJBSEORCGB4DSMRWGM3DEYRUGUYUCMBRGJDDOMTCGM2DENBQIYZTMQZTMJCGGMJWGNSDINRSMUYCELBCKYRDU6ZCOR4XAZJCHIREE2LHJZ2W2YTFOIRCYITIMV4CEORCGB4DANBUGM3DIYZVMJRDAMBQGARH2LBCJMRDUML5FQRFIIR2EJUHI5DQOM5C6L3UMVZXI3TFORZS433QMVXHGZLBFZUW6L3BONZWK5DTF4YHQMZQG4ZTMY3EMRSGKZBVGM4TEMDDMRRGMNTEMFRGMZBTGA3DOYZUMRRTEZRVGQ3TKLZSEJ6SYISCEI5CEMDYGI3GEYZVHE3EIMZZMM2UINBVIM4DKNJZGAYWENRZHE2WKMBYGQZEKMZXIFSTKN3BEIWCEVBCHIYTMMRQGEZTSOJWGI4TINBMEJGCEORCHA2TENZQGE2TUMDYMFRTIMBTG42TIMTFGIZGMMDGGQ2DSZJRGQYTAZLBGRQWMNTEMU3GIMRYGJSWCMJQMI2GGMLBGY4DGN3CMIZWCMBSGU4WCNDGMM2TSZRCFQREQIR2EIYHQYRQGI3GGNDEMQ2TAYZRMU3TEN3BGM2TMMZSMFRGEOLFMI4GCOBRGZRDSOLBGYYWKOBWGY3WINJYMNTDENRXMIZDEZJUMZTGMOJXGM3CE7ITR).

