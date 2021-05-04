import useStore from '../useStore';
import {useObserver} from 'mobx-react';

const TotalPrice = () => {
    const {totalPrice} = useStore();

    return useObserver(() =>(
        <div>총합: {totalPrice.num}원</div>
    ));
}

export default TotalPrice;