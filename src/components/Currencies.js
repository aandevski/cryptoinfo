import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Table} from 'react-bootstrap'

import {CurrencyRow} from './Currency'

export class Currencies extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Symbol</th>
              <th>Coin Name</th>
              <th>Algorithm</th>
              <th>Proof Type</th>
              <th>Total Coin Supply</th>
            </tr>
          </thead>
          <tbody>
            <CurrencyRow details={{"Id":"1182","Url":"/coins/btc/overview","ImageUrl":"/media/19633/btc.png","Name":"BTC","Symbol":"BTC","CoinName":"Bitcoin","FullName":"Bitcoin (BTC)","Algorithm":"SHA256","ProofType":"PoW","FullyPremined":"0","TotalCoinSupply":"21000000","BuiltOn":"N/A","SmartContractAddress":"N/A","PreMinedValue":"N/A","TotalCoinsFreeFloat":"N/A","SortOrder":"1","Sponsored":false}} />
            <CurrencyRow details={{"Id":"7605","Url":"/coins/eth/overview","ImageUrl":"/media/20646/eth_logo.png","Name":"ETH","Symbol":"ETH","CoinName":"Ethereum","FullName":"Ethereum (ETH)","Algorithm":"Ethash","ProofType":"PoW","FullyPremined":"0","TotalCoinSupply":"0","BuiltOn":"N/A","SmartContractAddress":"N/A","PreMinedValue":"N/A","TotalCoinsFreeFloat":"N/A","SortOrder":"2","Sponsored":false}}/>
          </tbody>
        </Table>
      </div>
    );
  }

}