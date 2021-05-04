import ItemList from './ItemList'
import BasketList from './BasketList';
import '../css/SuperMarket.css'
import TotalPrice from './TotalPrice';

const SuperMarket = ({ items, basket }) => {
    return (
        <div className='SuperMarket' >
            <div className="items-wrapper">
                <h2>상품</h2>
                <ItemList/>
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                <hr/>
                <BasketList/>
                <TotalPrice/>
            </div>
        </div>
    )
}

export default SuperMarket;