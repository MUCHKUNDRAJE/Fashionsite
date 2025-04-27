import ShopItems from "./database";

function getItemByID(id){
    return ShopItems.find(Item => Item.ID == id);
}

export default getItemByID;