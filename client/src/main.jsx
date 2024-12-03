import React from 'react'; // for building ui components
import ReactDOM from 'react-dom/client'; // for rendering React elements into the DOM
import { BrowserRouter as Router } from 'react-router-dom'; // for handling client-side routing
import { ThirdwebProvider } from '@thirdweb-dev/react'; // to integrate the thirdweb SDK
import { StateContextProvider } from './context';
import { Sepolia } from "@thirdweb-dev/chains";

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // creates root React DOM node at HTML element with id root

const SEPOLIA_CHAIN_ID = 11155111; // chain id for Sepolia Ethereum testnet
const CLIENT_ID = '30e66bcad49a41a50789d02898cb764a'; // thirdweb client ID

root.render(
  // Wrapping app with ThirdwebProvider, setting the correct chain and client ID
  <ThirdwebProvider activeChain={Sepolia} clientId={CLIENT_ID} desiredChainId={SEPOLIA_CHAIN_ID}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
);
