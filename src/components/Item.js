import '../css/Item.css'
import useStore from '../useStore'

const Item = ({ name, price }) => {
    const {basket} = useStore();
    
    const onPut = () =>{
        basket.put(name, price);
    }

    return (
        <div className = "Item" onClick = {onPut}>
                <h2>{name}</h2>
                <div>{price}</div>
        </div>
    )
}

export default Item;