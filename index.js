//These are Parent classes
class Item {
    constructor(name) {
        this.name = name;
    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
}
//This is the Main Menu
class Menu {
    constructor() {
        this.orders = [];
        this.selectedOrder = null;
    }
//This starts the Menu.
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
        switch (selection) {
            case '1':
                this.showMenu();
                break;
            case '2':
                this.createNewOrder();
                break;
            case '3':
                this.viewOrder();
                break;
            case '4':
                this.displayOrders();
                break;
            case '5':
                this.deleteOrder();
                break;
            default:
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert ('See you again soon!');
    }
//Main Menu Screen
    showMainMenuOptions() {
    return prompt(`
    Welcome to Coffee and Donuts!
    Please make a selection below!
    ------------------------------
        0) Exit
        1) Show Menu
        2) Create New Order
        3) View Order
        4) Display Orders
        5) Delete Orders
        `);
    }
//Where to add Items.
    showOrderMenuOptions(orderInfo) {
    return prompt (`
        0) Go Back
        1) Add an Item
        2) Delete an Item
        ------------------
            ${orderInfo}
        `);
    }

    showMenu() {
        alert(`
                        Menu Items
        -------------------------------------------
        Drinks:                      Donuts:
        - Iced Latte                 - Glazed
        - Hot Coffee                - Chocolate
        - Espresso                   - Donut Holes
        `);
    }
//This displays all orders that have been submitted
    displayOrders() {
        let orderString = '';
        for (let i = 0; i < this.orders.length; i++) {
            orderString += i + ' # - ' + this.orders[i].name + '\n';
        }
        alert(orderString);
    }
//This creates new orders.
    createNewOrder() {
        let name = prompt('What will be the name on the order?');
        this.orders.push(new Order(name));
        this.selectedOrder = this.orders[this.orders.length-1]
        this.addAnItem();
        alert('Thank you for your order.  We are working on it now.')
    }
//This views individual orders.
    viewOrder() {
        let index = prompt('What selection would you like to view?');
        if (index > -1 && index < this.orders.length) {
            this.selectedOrder = this.orders[index];

            let decription = 'Order Name: ' + this.selectedOrder.name + '\n';

        for(let i = 0; i < this.selectedOrder.items.length; i++) {
            decription += i + ' # - ' + this.selectedOrder.items[i].name + '\n';
            }

        let selection = this.showOrderMenuOptions(decription);
        switch (selection) {
            case '1':
                this.addAnItem();
                break;
            case '2':
                this.deleteAnItem();
            }
        }

    }
//This is the Delete Menu
    deleteOrder() {
        let index = prompt('What is the order number you wish to delete?');
        if (index > -1 && index < this.orders.length) {
            this.orders.splice(index, 1);
        alert('Your order is deleted.  Let me know if I can get you anything else.');
        }
    }
//This is where you can add another item to your order.
    addAnItem() {
        let name = prompt(`What would you like to add to your order?
        -------------------------------------------------------------
        Menu items
        -------------------------------------------------------------
        Coffee:                                 Donuts:
        - Iced Latte                            - Glazed
        - Hot Coffee                            - Chocolate
        - Espresso                              - Donut Holes`);

        this.selectedOrder.items.push(new Item(name));
    }
//This is where you delete items off your order.
    deleteAnItem() {
        let index = prompt('What is the item number you want to delete from this order?');
        if(index > -1 && index < this.selectedOrder.items.length) {
            this.selectedOrder.items.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();