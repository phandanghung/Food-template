export class Food {
    constructor(id,name,type, price,discount,status,image,desc){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.discount = discount;
        this.status = status;
        this.img = image;
        this.desc = desc;
    }
    calculatePrice = () => {
        return this.price - this.price * this.discount;
    }
}