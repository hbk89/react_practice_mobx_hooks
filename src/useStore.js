import counter from './stores/counter';
import itemList from './stores/itemList';
import basket from './stores/basket';
import totalPrice from './stores/totalPrice';

const useStore = () =>{
    return {counter, itemList, basket, totalPrice};
}

export default useStore;