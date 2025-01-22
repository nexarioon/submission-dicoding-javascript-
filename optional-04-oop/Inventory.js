import Item from './Item.js';
/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor() {
        this.item = [];
    }

    //add item
    addItem(item) {
        this.item.push(item);
        console.log(`item "${this.item}" berhasil ditambahkan`);
    }

    //remove item
    removeItem(id) {
        const index = this.item.findIndex((item) => item.id === id);
        if (index !== -1) {
            console.log(`item "${this.item[index].name}"berhasil dihapus`);
            this.item.splice(index, 1);
        } else {
            console.log(`item dengan ID ${id} tidak ditemukan`);
        }
    }

    //list items
    listItems() {
        if (this.item.length === 0) {
            return `Inventaris Kosong`;
        }
        return this.item.map((item) => item.displayDetails()).join('\n');
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
