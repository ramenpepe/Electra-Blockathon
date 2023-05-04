# Electra-Blockathon
Electra repo for 2023

---

Front end:
http://electra.alkia.net:5173/

Tendermint:
http://electra.alkia.net:26657/status?

API:
http://electra.alkia.net:1317/

## Executive Summary
The first centralized power station was built by Thomas Edison in New York City in 1882, which supplied electricity to a small area in Lower Manhattan. Prior to this, electricity was mainly used for small-scale applications, such as lighting and electroplating, and generated on-site using small generators or batteries.

By the early 20th century, most cities had centralized power stations (powergrids), which were connected to homes and businesses through a network of power lines. oday, centralized electricity generation and distribution is the norm in most parts of the world, although there is growing interest in decentralized and renewable energy sources, such as solar and wind power, referred as community-based renewable energy systems.

Community-based renewable energy systems present significant innovation opportunities that can transform the way we generate and consume electricity. These systems offer a range of benefits, including increased access to clean energy, reduced energy costs, and improved social and economic outcomes for communities.

### Problem Statement
The growing interest in renewal energy creates the opportunity for individuals and companies to produce their own electricity instead of completely relying on centralized power stations. 

Decentralizing electricity through the use of renewable energy sources has the potential to transform the way we generate and consume electricity. However, it also presents several challenges that must be addressed to make it a viable and sustainable option.

One of the main challenges is the variability and intermittency of renewable energy sources such as solar and wind power. Unlike conventional power plants that can provide a steady supply of electricity, renewable energy sources can only generate electricity when the sun is shining or the wind is blowing. To ensure a consistent supply of electricity, energy storage systems such as batteries or pumped hydro storage must be used to store excess energy when it is generated and release it when there is a shortfall. However, these storage systems can be expensive, and their efficiency is still improving, which can limit the cost-effectiveness of decentralized renewable energy generation.

Another challenge is the need for a robust and reliable distribution system to connect decentralized renewable energy sources to consumers. In some areas, the existing grid infrastructure may not be sufficient to handle the increased energy flows, which can result in power outages or even damage to the grid. Additionally, the variability of renewable energy sources can make it difficult to balance the supply and demand of electricity, which can also impact grid stability.

### Market Opportunity
Community-based renewable energy systems (microgrids) such as community solar projects or wind cooperatives enable consumers to share the costs and benefits of renewable energy systems, providing access to clean energy for those who might not otherwise be able to afford it. By reselling excess electricity produced with others in need at a substantial discount from the powergrid, there is less energy waste, reduces the need for energy storage systems such as batteries or pumped hydro storage, improves resource efficiency. 

The microgrid model is gaining popularity and offers significant market opportunities for decentralized renewable energy. Microgrids can enable communities to operate their own energy systems independently of the main powergrid, increasing energy security and resilience in the face of power outages or other disruptions.

### Innovation
Community-based renewable energy systems provide the folllowing innovation opportunities:

- Blockchain technology - blockchain enables peer-to-peer energy trading. This technology can allow consumers to buy and sell energy directly with each other, bypassing traditional utility companies and enabling greater control and flexibility over energy usage. By decentralizing the energy market, blockchain technology can also help to reduce transaction costs and improve market efficiency.

- Smart grid technology - Smart grids can enable real-time monitoring and control of energy usage, allowing consumers to optimize their energy consumption and reduce waste. In addition, smart grids can also facilitate the integration of renewable energy sources into the grid, helping to balance supply and demand and ensure grid stability.

- Community-based financing models - crowdfunding or community bonds, facilitated by issuing tokens, can enable communities to finance renewable energy projects collectively, spreading the cost and risk of the project among a larger group of investors. These models can help to democratize access to financing for renewable energy projects and enable communities to take a more active role in the energy transition.

### Architecture
Each member of the community is outfitted with a smart meter. This smart meter device can be connected to the existing meter. It measures the electricity usage (consumption or production of electricity) from the meter and using the embedded hardware wallet, the smart meter signs and submits transactions to the microgrid blockchain. 

This microgrid blockchain is a specialized blockchain based on Cosmos. It is permissioned. New members are automatically added to the microgrid blockchain when they are outfitted with a smart meter. The microgrid blockchain does not enforce gas fees and each member, represented by each smart meter, is a validator in a round robbin fashion (for example).

The microgrid blockchain is a closed system, meaning participating members cannot inspect the on-chain transactions to preserve privacy. Only the microgrid node reads all the committed transactions to the blockchain and performs the necessary accounting for billing purposes, which can be verified by an independent auditor. 

The microgrid node is then connected to the main chain where excess energy can be shared with other microgrids, and accounting is performed on the main chain. Monetary value is exchanged between microgrids through the ELECTRA stablecoin. 

## Q&A

![image](https://user-images.githubusercontent.com/17525857/235558001-98df9f93-54d0-4c88-bbb7-7d466cfd13de.png)

### What is the problem you’re trying to solve?
Build a semi-decenralized, distributed marketplace for producers to sell their surplus of electricity and consumers to purchase at the best market rate.

### Why is this problem important to solve?
Today electricity generated by large grids that goes unused is wasted. Storing this surplus capacity and selling during peak hours when production capacity is strained can reduce cost to the consumers. This approach is similar to elastic computing first introduced by AWS. To enable elastic electricity requires lower cost, higher capacity storage. The innovative breakthroughs in silicon-anode batteries will make this possible. 

Green alternative producers of electricity (solar, wind, etc) aren’t able to sell their surplus. 	Instead of forcing every alternative producer to store their surplus by purchasing batteries, by enabling 2-way transmission they can resell their surplus. 

The cumulative effect will reduce the cost of electricity by optimizing production and usage.

### Why now?
EV has ushered breakthroughs in green energy and battery technology. However, the electric grid remains in the past. Pricing is set by the grid because it’s the only producer. To fully leverage on these innovations, the grid needs to be updated. Instead of a single producer who holds a monopoly on pricing, we envision micro-grids for each community where pricing is dynamic and consumers benefit from optimized pricing. The micro-grid serves as a market maker and order book matching multiple electricity producers with consumers. 
Now is the time to start building out this vision in anticipation of these innovations coming together.

### Why is blockchain necessary?
To reduce consumption fraud, each electrical meter is mapped to a wallet address. Every kWatt consumed/produced is traceable by a transaction signed by the meter’s private key and committed in the permissioned micro-grid blockchain. Consumption cost is easily settled automatically because it is in the blockchain’s ledger.
