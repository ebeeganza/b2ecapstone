import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ItemService {
    items = [{itemName: 'item1', itemUnit:1}, {itemName:'item2', itemUnit:2}];

    getItems() {
        return this.items;
    }

    addItem(item: { itemName: string; itemUnit: number; }) {
        this.items.push(item);
    }

    remove(item: { itemName: string; itemUnit: number; }) {
        const index = this.items.indexOf(item);
        this.items.splice(index, );
    }
}