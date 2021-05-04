import {useObserver} from 'mobx-react'
import '../css/basket.css'
import useStore from '../useStore'

const Basket = ({name, price, count}) => {
    const {basket, totalPrice} = useStore();

    const onTake = () =>{
        basket.take(name);
        totalPrice.num -= price;
    }

    return useObserver(()=>(
        <div className = "Basket">
            <div className = "name">{name}</div>
            <div className = "price">{price}</div>
            <div className = "count">{count}</div>
            <button onClick={onTake}>갖다놓기</button>
        </div>
    ))
}

export default Basket;