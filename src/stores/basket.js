import { observable } from 'mobx';
import counter from './counter';

const basket = observable({
    selectedItems: [],

    put(name, price){
        const exist = this.selectedItems.find(item => item.name === name);
        if(!exist){
            this.selectedItems.push({
                name,
                price,
                count : counter.number,
            });
        }else {
            exist.count+=counter.number;
        }
    },

    take(name){
        const item = this.selectedItems.find(a => a.name === name);
        item.count-=counter.number;
        if(item.count <= 0){
            this.selectedItems.remove(item);
        }
    },
});

export default basket;