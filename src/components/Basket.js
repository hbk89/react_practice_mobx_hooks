import {useObserver} from 'mobx-react'

const Basket = ({name, price, count}) => {
    return useObserver(()=>(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{count}</p>
        </div>
    ))
}

export default Basket;