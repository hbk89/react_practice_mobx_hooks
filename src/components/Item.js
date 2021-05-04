import '../css/Item.css'
import useStore from '../useStore'

const Item = ({ name, price }) => {
    const {basket, totalPrice} = useStore();
    
    const onPut = () =>{
        basket.put(name, price);
        totalPrice.num += price;
    }

    return (
        <div className = "Item" onClick = {onPut}>
                <h2>{name}</h2>
                <div>{price}</div>
        </div>
    )
}

export default Item;