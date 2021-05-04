import {useObserver} from 'mobx-react'
import '../css/basket.css'
import useStore from '../useStore'
import Basket from '../components/Basket'

const BasketList = () => {
    const {basket} = useStore();
    
    return useObserver(() => (
        <div>
            {basket.selectedItems.map(item => <Basket {...item} key={item.name}/>)}
            <hr/>
        </div>
    ))
}

export default BasketList;