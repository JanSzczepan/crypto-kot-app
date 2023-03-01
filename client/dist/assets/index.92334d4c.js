var H = Object.defineProperty,
   q = Object.defineProperties
var F = Object.getOwnPropertyDescriptors
var _ = Object.getOwnPropertySymbols
var K = Object.prototype.hasOwnProperty,
   O = Object.prototype.propertyIsEnumerable
var $ = (t, e, a) =>
      e in t
         ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
         : (t[e] = a),
   T = (t, e) => {
      for (var a in e || (e = {})) K.call(e, a) && $(t, a, e[a])
      if (_) for (var a of _(e)) O.call(e, a) && $(t, a, e[a])
      return t
   },
   S = (t, e) => q(t, F(e))
import {
   j as s,
   a as f,
   r as i,
   F as y,
   f as G,
   b as z,
   c as U,
   d as Q,
   e as V,
   R as M,
   p as X,
   W as Y,
   C as J,
   g as Z,
   h as f0,
   i as e0,
   m as I,
   k as t0,
} from './vendor.7083962e.js'
const a0 = function () {
   const e = document.createElement('link').relList
   if (e && e.supports && e.supports('modulepreload')) return
   for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n)
   new MutationObserver((n) => {
      for (const c of n)
         if (c.type === 'childList')
            for (const b of c.addedNodes)
               b.tagName === 'LINK' && b.rel === 'modulepreload' && o(b)
   }).observe(document, { childList: !0, subtree: !0 })
   function a(n) {
      const c = {}
      return (
         n.integrity && (c.integrity = n.integrity),
         n.referrerpolicy && (c.referrerPolicy = n.referrerpolicy),
         n.crossorigin === 'use-credentials'
            ? (c.credentials = 'include')
            : n.crossorigin === 'anonymous'
            ? (c.credentials = 'omit')
            : (c.credentials = 'same-origin'),
         c
      )
   }
   function o(n) {
      if (n.ep) return
      n.ep = !0
      const c = a(n)
      fetch(n.href, c)
   }
}
a0()
const n0 = () =>
   s('div', {
      className: 'loader mx-auto',
      children: [f('div', {}), f('div', {}), f('div', {}), f('div', {})],
   })
const s0 = () => {
   const [t, e] = i.exports.useState(!1)
   return f('nav', {
      className:
         'navbar navbar-expand-lg navbar-dark bg-transparent px-3 px-sm-4 px-xl-5 py-5',
      children: s('div', {
         className: 'container-fluid',
         children: [
            f('a', {
               className: 'navbar-brand',
               href: '#',
               children: 'CryptoKot',
            }),
            s('button', {
               onClick: () => {
                  e((a) => !a)
               },
               className: 'navbar-toggler',
               type: 'button',
               'data-bs-toggle': 'collapse',
               'data-bs-target': '#navbarSupportedContent',
               'aria-controls': 'navbarSupportedContent',
               'aria-expanded': 'false',
               'aria-label': 'Toggle navigation',
               children: [
                  !t && f(y, { className: 'nav-icon', icon: G }),
                  t && f(y, { className: 'nav-icon', icon: z }),
               ],
            }),
            s('div', {
               className: 'collapse navbar-collapse pt-4 pt-lg-0',
               id: 'navbarSupportedContent',
               children: [
                  s('ul', {
                     className:
                        'navbar-nav me-auto me-lg-0 mb-2 mb-lg-0 ms-0 ms-lg-auto ms-0 ms-lg-auto',
                     children: [
                        f('li', {
                           className: 'nav-item',
                           children: f('a', {
                              className: 'nav-link active',
                              'aria-current': 'page',
                              href: '#',
                              children: 'Market',
                           }),
                        }),
                        f('li', {
                           className: 'nav-item',
                           children: f('a', {
                              className: 'nav-link',
                              href: '#',
                              children: 'Exchange',
                           }),
                        }),
                        f('li', {
                           className: 'nav-item',
                           children: f('a', {
                              className: 'nav-link',
                              href: '#',
                              children: 'Wallets',
                           }),
                        }),
                     ],
                  }),
                  s('form', {
                     className: 'justify-content-start px-0 ms-lg-2',
                     children: [
                        f('button', {
                           className: 'btn btn-outline-light me-2',
                           type: 'button',
                           children: 'Log in',
                        }),
                        f('button', {
                           className: 'btn btn-light',
                           type: 'button',
                           children: 'Sign up',
                        }),
                     ],
                  }),
               ],
            }),
         ],
      }),
   })
}
const c0 = () =>
   f('section', {
      className: 'services px-4 px-sm-5 py-5 text-light',
      children: s('div', {
         className: 'row row-cols-1 row-cols-md-3 g-4',
         children: [
            f('div', {
               className: 'col',
               children: f('div', {
                  className: 'services-card card h-100 mx-auto',
                  children: s('div', {
                     className: 'services-card-body card-body pt-0',
                     children: [
                        f('div', {
                           className: 'services-icon-box mx-auto my-3',
                           children: f(y, {
                              className: 'services-icon',
                              icon: U,
                           }),
                        }),
                        f('h5', {
                           className:
                              'services-card-title card-title text-center',
                           children: 'Secured',
                        }),
                        f('p', {
                           className: 'card-text text-center',
                           children:
                              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum excepturi eaque?',
                        }),
                     ],
                  }),
               }),
            }),
            f('div', {
               className: 'col',
               children: f('div', {
                  className: 'services-card card h-100 mx-auto',
                  children: s('div', {
                     className: 'services-card-body card-body pt-0',
                     children: [
                        f('div', {
                           className: 'services-icon-box mx-auto my-3',
                           children: f(y, {
                              className: 'services-icon',
                              icon: Q,
                           }),
                        }),
                        f('h5', {
                           className:
                              'services-card-title card-title text-center',
                           children: 'Fast',
                        }),
                        f('p', {
                           className: 'card-text text-center',
                           children:
                              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, asperiores ratione.',
                        }),
                     ],
                  }),
               }),
            }),
            f('div', {
               className: 'col',
               children: f('div', {
                  className: 'services-card card h-100 mx-auto',
                  children: s('div', {
                     className: 'services-card-body card-body pt-0',
                     children: [
                        f('div', {
                           className: 'services-icon-box mx-auto my-3',
                           children: f(y, {
                              className: 'services-icon',
                              icon: V,
                           }),
                        }),
                        f('h5', {
                           className:
                              'services-card-title card-title text-center',
                           children: 'Easy',
                        }),
                        f('p', {
                           className: 'card-text text-center',
                           children:
                              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, sed totam.',
                        }),
                     ],
                  }),
               }),
            }),
         ],
      }),
   })
const r0 = 'hh-sol-artifact-1',
   o0 = 'Transactions',
   i0 = 'contracts/Transactions.sol',
   b0 = [
      {
         anonymous: !1,
         inputs: [
            {
               indexed: !1,
               internalType: 'address',
               name: 'from',
               type: 'address',
            },
            {
               indexed: !1,
               internalType: 'address',
               name: 'receiver',
               type: 'address',
            },
            {
               indexed: !1,
               internalType: 'uint256',
               name: 'amount',
               type: 'uint256',
            },
            {
               indexed: !1,
               internalType: 'string',
               name: 'message',
               type: 'string',
            },
            {
               indexed: !1,
               internalType: 'uint256',
               name: 'timestamp',
               type: 'uint256',
            },
            {
               indexed: !1,
               internalType: 'string',
               name: 'keyword',
               type: 'string',
            },
         ],
         name: 'Transaction',
         type: 'event',
      },
      {
         inputs: [
            {
               internalType: 'address payable',
               name: 'receiver',
               type: 'address',
            },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'string', name: 'message', type: 'string' },
            { internalType: 'string', name: 'keyword', type: 'string' },
         ],
         name: 'addToBlockchain',
         outputs: [],
         stateMutability: 'nonpayable',
         type: 'function',
      },
      {
         inputs: [],
         name: 'getAllTransactions',
         outputs: [
            {
               components: [
                  { internalType: 'address', name: 'sender', type: 'address' },
                  {
                     internalType: 'address',
                     name: 'receiver',
                     type: 'address',
                  },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'string', name: 'message', type: 'string' },
                  {
                     internalType: 'uint256',
                     name: 'timestamp',
                     type: 'uint256',
                  },
                  { internalType: 'string', name: 'keyword', type: 'string' },
               ],
               internalType: 'struct Transactions.TransferStruct[]',
               name: '',
               type: 'tuple[]',
            },
         ],
         stateMutability: 'view',
         type: 'function',
      },
      {
         inputs: [],
         name: 'getTransactionCount',
         outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
         stateMutability: 'view',
         type: 'function',
      },
   ],
   l0 =
      '0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f3845eec85b1053c571e94818aaec949784fe0f52d4b581d0b0605dff4a63ba8e33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220b813185429ecea5b59571340ef184dc089de3beedc9dda1c2da0ee30849898ba64736f6c63430008000033',
   d0 =
      '0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f3845eec85b1053c571e94818aaec949784fe0f52d4b581d0b0605dff4a63ba8e33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220b813185429ecea5b59571340ef184dc089de3beedc9dda1c2da0ee30849898ba64736f6c63430008000033',
   m0 = {},
   u0 = {}
var p0 = {
   _format: r0,
   contractName: o0,
   sourceName: i0,
   abi: b0,
   bytecode: l0,
   deployedBytecode: d0,
   linkReferences: m0,
   deployedLinkReferences: u0,
}
const h0 = p0.abi,
   y0 = '0x22fE31c4E94d90f46BC94b1a1D0b6d37b0044Ce4',
   N = M.createContext(),
   { ethereum: m } = window,
   k = () => {
      const e = new Y(m).getSigner()
      return new J(y0, h0, e)
   },
   g0 = ({ children: t }) => {
      const [e, a] = i.exports.useState(''),
         [o, n] = i.exports.useState({
            addressTo: '',
            amount: '',
            keyword: '',
            message: '',
         }),
         [c, b] = i.exports.useState(!1),
         [l, d] = i.exports.useState(localStorage.getItem('transactionCount')),
         [h, g] = i.exports.useState([]),
         w = (r, u) => {
            n((v) => S(T({}, v), { [u]: r.target.value }))
         },
         W = async () => {
            try {
               if (!m) return alert('Please install Metamask!')
               const u = await k().getAllTransactions()
               console.log(u)
               const v = u.map((p) => ({
                  addressTo: p.receiver,
                  addressFrom: p.sender,
                  timestamp: new Date(
                     p.timestamp.toNumber() * 1e3
                  ).toLocaleString(),
                  message: p.message,
                  keyword: p.keywor,
                  amount: parseInt(p.amount._hex) / 10 ** 18,
               }))
               console.log(v), g(v)
            } catch (r) {
               console.log(r)
            }
         },
         j = async () => {
            console.log('ok2')
            try {
               if (!m) return alert('Please install Metamask!')
               const r = await m.request({ method: 'eth_accounts' })
               r.length
                  ? (a(r[0]), W(), D())
                  : console.log('No accounts found'),
                  console.log(r)
            } catch (r) {
               throw (console.log(r), new Error('No ethereum object!'))
            }
         },
         D = async () => {
            try {
               if (m) {
                  console.log('ok')
                  const u = await k().getTransactionCount()
                  window.localStorage.setItem('transactionCount', u)
               }
            } catch (r) {
               throw (console.log(r), new Error('No ethereum object'))
            }
         },
         P = async () => {
            try {
               if (!m) return alert('Please install Metamask!')
               const r = await m.request({ method: 'eth_requestAccounts' })
               a(r[0])
            } catch (r) {
               throw (console.log(r), new Error('No ethereum object!'))
            }
         },
         R = async () => {
            try {
               if (!m) return alert('Please install Metamask!')
               const { addressTo: r, amount: u, keyword: v, message: p } = o,
                  A = k(),
                  L = X(u)
               m.request({
                  method: 'eth_sendTransaction',
                  params: [{ from: e, to: r, gas: '0x5208', value: L._hex }],
               })
               const C = await A.addToBlockchain(r, L, p, v)
               b(!0),
                  console.log(`Loading - ${C.hash}`),
                  await C.wait(),
                  b(!1),
                  console.log(`Success - ${C.hash}`)
               const B = await A.getTransactionCount()
               d(B.toNumber()), window.location.reload()
            } catch (r) {
               throw (console.log(r), new Error('No ethereum object!'))
            }
         }
      return (
         i.exports.useEffect(() => {
            j(),
               window.ethereum.on('accountsChanged', function (r) {
                  window.location.reload()
               })
         }, [l]),
         f(N.Provider, {
            value: {
               connectWallet: P,
               currentAccounts: e,
               formData: o,
               handleChange: w,
               sendTransaction: R,
               transactions: h,
               isLoading: c,
            },
            children: t,
         })
      )
   },
   E = (t) => `${t.slice(0, 5)}...${t.slice(t.length - 4)}`,
   x = ({ placeholder: t, name: e, type: a, value: o, handleChange: n }) =>
      f('input', {
         placeholder: t,
         type: a,
         step: '0.0001',
         value: o,
         onChange: (c) => n(c, e),
         className: 'transaction-input form-control mb-3 text-light',
      }),
   v0 = () => {
      const {
            formData: t,
            handleChange: e,
            sendTransaction: a,
            currentAccounts: o,
            isLoading: n,
         } = i.exports.useContext(N),
         c = (b) => {
            const { addressTo: l, amount: d, keyword: h, message: g } = t
            b.preventDefault(), !(!l || !d || !h || !g) && a()
         }
      return (
         i.exports.useEffect(() => {
            document.querySelectorAll('.tt').forEach((l) => {
               new Z.Tooltip(l)
            })
         }, []),
         s('form', {
            action: '/',
            className: 'transaction-form px-4 py-5',
            onSubmit: c,
            children: [
               s('div', {
                  className:
                     'crypto-card py-3 px-4 d-flex flex-column justify-content-between text-light',
                  children: [
                     s('div', {
                        className: 'd-flex justify-content-between',
                        children: [
                           f('div', {
                              className: 'eth-symbol-container mb-2',
                              children: f(y, {
                                 className: 'eth-icon',
                                 icon: f0,
                              }),
                           }),
                           f('div', {
                              className: 'i-symbol-container tt',
                              'data-bs-placement': 'top',
                              title: 'This is Ethereum card with your address',
                              children: f(y, { className: 'i-icon', icon: e0 }),
                           }),
                        ],
                     }),
                     s('div', {
                        className: 'eth-card-text',
                        children: [
                           f('p', {
                              className: 'address-text mb-1',
                              children: E(o),
                           }),
                           f('h3', {
                              className: 'eth-title m-0',
                              children: 'Ethereum',
                           }),
                        ],
                     }),
                  ],
               }),
               s('div', {
                  className: 'inputs-container',
                  children: [
                     f(x, {
                        placeholder: 'Address To',
                        name: 'addressTo',
                        type: 'text',
                        handleChange: e,
                     }),
                     f(x, {
                        placeholder: 'Amount (ETH)',
                        name: 'amount',
                        type: 'number',
                        handleChange: e,
                     }),
                     f(x, {
                        placeholder: 'Keyword (Gif)',
                        name: 'keyword',
                        type: 'text',
                        handleChange: e,
                     }),
                     f(x, {
                        placeholder: 'Enter Message',
                        name: 'message',
                        type: 'text',
                        handleChange: e,
                     }),
                     n
                        ? f(n0, {})
                        : f('button', {
                             type: 'submit',
                             className:
                                'transaction-btn btn btn-light btn-lg w-100 rounded-pill',
                             children: 'Send Now',
                          }),
                  ],
               }),
            ],
         })
      )
   },
   x0 = 'h2WQdzDSkIGEiLkkeKkNRwvrjD7DCG4e',
   N0 = ({ keyword: t }) => {
      const [e, a] = i.exports.useState(''),
         o = async () => {
            var n, c, b
            try {
               const l = await fetch(
                     `https://api.giphy.com/v1/gifs/search?api_key=${x0}&q=${t
                        .split(' ')
                        .join('')}&limit=1`
                  ),
                  { data: d } = await l.json()
               console.log(d),
                  a(
                     (b =
                        (c = (n = d[0]) == null ? void 0 : n.images) == null
                           ? void 0
                           : c.downsized_medium) == null
                        ? void 0
                        : b.url
                  )
            } catch {
               a('https://i.giphy.com/media/MWSRkVoNaC30A/giphy.webp')
            }
         }
      return (
         i.exports.useEffect(() => {
            t && o()
         }, [t]),
         e
      )
   },
   w0 = ({
      addressTo: t,
      addressFrom: e,
      timestamp: a,
      keyword: o,
      amount: n,
      message: c,
      url: b,
      arr: l,
      index: d,
   }) => {
      const h = N0({ keyword: o })
      return f('div', {
         className: 'col',
         children: f('div', {
            className: 'transaction-card card h-100',
            children: s('div', {
               className: 'transaction-body-card card-body',
               children: [
                  s('h5', {
                     className: 'card-title mb-3 mt-2',
                     children: ['Transaction ', l.length - d],
                  }),
                  s('div', {
                     className: 'card-text-container pe-2',
                     children: [
                        f('a', {
                           className: 'text-decoration-none',
                           href: `https://ropsten.etherscan.io/address/${e}`,
                           target: '_blank',
                           rel: 'noopener noreferrer',
                           children: s('p', {
                              className: 'text-light m-0',
                              children: ['From: ', E(e)],
                           }),
                        }),
                        f('a', {
                           className: 'text-decoration-none',
                           href: `https://ropsten.etherscan.io/address/${t}`,
                           target: '_blank',
                           rel: 'noopener noreferrer',
                           children: s('p', {
                              className: 'text-light m-0',
                              children: ['To: ', E(t)],
                           }),
                        }),
                        s('p', {
                           className: 'm-0',
                           children: ['Amount: ', n, ' ETH'],
                        }),
                        c &&
                           s('p', {
                              className: 'message-text m-0',
                              children: ['Message: ', c],
                           }),
                     ],
                  }),
                  f('img', {
                     src: h || b,
                     className: 'card-img img-fluid mt-3',
                     alt: 'gif',
                  }),
                  f('div', {
                     className:
                        'time-container mt-n3 mx-auto py-1 px-3 text-center',
                     children: f('p', {
                        className: 'time-text m-0',
                        children: a,
                     }),
                  }),
               ],
            }),
         }),
      })
   },
   C0 = (t) => {
      const { currentAccounts: e, transactions: a } = i.exports.useContext(N),
         [o, n] = i.exports.useState(0),
         c = i.exports.useRef(),
         b = i.exports.useRef(),
         l = () => {
            n(c.current.scrollWidth - c.current.offsetWidth)
         },
         d = () => {
            t.setChangeComponent('SendCrypto')
         }
      return (
         i.exports.useEffect(
            () => (
               l(),
               window.addEventListener('resize', d),
               () => {
                  window.removeEventListener('resize', d)
               }
            )
         ),
         s('section', {
            className: 'history',
            children: [
               e
                  ? f('h3', {
                       className: 'history-title text-light my-5',
                       children: 'Latest Transactions',
                    })
                  : f('h3', {
                       className: 'history-title text-light my-5',
                       children:
                          'Please connect your wallet to see latest transactions',
                    }),
               f(I.div, {
                  className: 'cards-container-container',
                  ref: c,
                  whileTap: { cursor: 'grabbing' },
                  children: f(I.div, {
                     className:
                        'cards-container row flex-nowrap g-4 text-light',
                     ref: b,
                     drag: 'x',
                     dragConstraints: { right: 0, left: -o },
                     children: [...a]
                        .reverse()
                        .map((h, g, w) =>
                           f(w0, S(T({}, h), { arr: w, index: g }), g)
                        ),
                  }),
               }),
            ],
         })
      )
   },
   T0 = () => {
      const [t, e] = i.exports.useState('SendCrypto'),
         a = (n) => {
            n !== t && e(n)
         }
      let o
      return (
         t === 'SendCrypto'
            ? (o = f(v0, {}))
            : t === 'History' && (o = f(C0, { setChangeComponent: e })),
         s('main', {
            className: 'main px-4 px-sm-5 py-5',
            children: [
               s('ul', {
                  className: 'nav mb-3',
                  children: [
                     f('li', {
                        className: 'nav-item',
                        children: f('button', {
                           className: `btn main-btn ${
                              t === 'SendCrypto'
                                 ? 'text-white text-decoration-underline'
                                 : 'text-muted'
                           }`,
                           type: 'button',
                           onClick: () => a('SendCrypto'),
                           children: 'Send Crypto',
                        }),
                     }),
                     f('li', {
                        className: 'nav-item',
                        children: f('button', {
                           className: `btn main-btn ${
                              t === 'History'
                                 ? 'text-white text-decoration-underline'
                                 : 'text-muted'
                           }`,
                           type: 'button',
                           onClick: () => a('History'),
                           children: 'History',
                        }),
                     }),
                  ],
               }),
               o,
            ],
         })
      )
   }
const S0 = () => {
   const { connectWallet: t, currentAccounts: e } = i.exports.useContext(N)
   return s('header', {
      className: 'header text-light px-4 px-sm-5 pb-5',
      children: [
         s('h1', {
            className: 'text-header mt-5 mb-0',
            children: ['Send Crypto', f('br', {}), 'across the World!'],
         }),
         f('p', {
            className: 'text-sub-header text-muted my-4',
            children:
               'Explore the crypto world. Buy and sell cryptocurrencies easily on CryptoKot.',
         }),
         !e &&
            f('button', {
               type: 'button',
               className:
                  'connect-btn btn btn-lg rounded-pill mt-4 text-light mb-n4',
               onClick: t,
               children: 'Connect wallet',
            }),
      ],
   })
}
const k0 = () =>
   s('div', {
      className: 'app',
      children: [
         f('div', {
            className: 'app__left col-12 col-lg-7 col-xxl-6',
            children: s('div', {
               className: 'app__left-wrapper',
               children: [f(s0, {}), f(S0, {}), f(c0, {})],
            }),
         }),
         f('div', {
            className: 'app__right col-12 col-lg-5 col-xxl-6',
            children: f('div', {
               className: 'app__right-wrapper',
               children: f(T0, {}),
            }),
         }),
      ],
   })
t0.render(
   f(g0, { children: f(M.StrictMode, { children: f(k0, {}) }) }),
   document.getElementById('root')
)
