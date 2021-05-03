import counter from './stores/counter';
import itemList from './stores/itemList';
import basket from './stores/basket';

const useStore = () =>{
    return {counter, itemList, basket};
}

export default useStore;