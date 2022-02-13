import React from 'react'
import { layerStore } from '../../../stores/layerStore'

type Props = {}

const LayerContainer: React.FC<Props> = ({}) => {
    const store = layerStore(state => state)
    const Layer = store.layers[0]?.layer
    const props = store.layers[0]?.props
    return <div className="LAYER idk">{store.layers.length ? <Layer {...props} /> : ''}</div>
}

export default LayerContainer
