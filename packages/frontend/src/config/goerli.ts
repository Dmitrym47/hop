import { goerli as goerliAddresses } from '@hop-protocol/core/addresses'
import { goerli as goerliNetworks } from '@hop-protocol/core/networks'
import { HopAddresses, Networks } from './interfaces'

export const addresses: HopAddresses = {
  governance: {
    l1Hop: '',
    stakingRewardsFactory: '',
    stakingRewards: '',
    governorAlpha: '',
  },
  tokens: goerliAddresses.bridges,
  bonders: goerliAddresses.bonders,
}

const _networks = goerliNetworks as any

export const networks: Networks = {
  ethereum: {
    networkId: _networks.ethereum.networkId,
    rpcUrl: _networks.ethereum.publicRpcUrl,
    explorerUrl: _networks.ethereum.explorerUrls[0],
  },
  polygon: {
    networkId: _networks.polygon.networkId,
    rpcUrl: _networks.polygon.publicRpcUrl,
    explorerUrl: _networks.polygon.explorerUrls[0],
  },
  optimism: {
    networkId: _networks.optimism.networkId,
    rpcUrl: _networks.optimism.publicRpcUrl,
    explorerUrl: _networks.optimism.explorerUrls[0],
  },
  arbitrum: {
    networkId: _networks.arbitrum.networkId,
    rpcUrl: _networks.arbitrum.publicRpcUrl,
    explorerUrl: _networks.arbitrum.explorerUrls[0],
  },
}
