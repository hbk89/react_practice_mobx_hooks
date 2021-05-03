import { observable } from 'mobx'

const basket = observable({
    selectedItems: [],

    put(name, price){
        const exist = this.selectedItems.find(item => item.name === name);
        if(!exist){
            this.selectedItems.push({
                name,
                price,
                count : 1,
            });
        }else {
            exist.count++;
        }
    },

    take(name){
        const item = this.selectedItems.find(item => item.name === name);
        item.count --;
        if(!item.count){
            this.selectedItems.remove(item);
        }
    },
    
    get total() {

    },
});

export default basket;