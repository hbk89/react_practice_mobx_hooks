import useStore from '../useStore';
import Item from './Item';

const ItemList = () =>{
    const {itemList} = useStore();

    return(
        <div>
        {itemList.map(item => <Item {...item} key = {Item.name}/>)}
        </div>
    )
}

export default ItemList;