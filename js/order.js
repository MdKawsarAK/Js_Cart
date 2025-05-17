class Order {
    constructor(name) {
        this.name = name;
    }
    get(){
        let orders= localStorage.getItem(this.name);       
        if(orders!=null){
            orders=JSON.parse(orders);
            return orders;
        }
        
        return [];
       }//end getCart
    add(newOrder) {
        // Retrieve existing orders
        let existingOrders = JSON.parse(localStorage.getItem(this.name)) || [];
        // Add the new order
        existingOrders.push(newOrder);
        // Save the updated array back to localStorage
        localStorage.setItem(this.name, JSON.stringify(existingOrders));
    }
}



