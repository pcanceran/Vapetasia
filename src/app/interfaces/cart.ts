import { ProductGroup } from "./product-group";
import { IAlphaOmegaGrouping } from "./products.interfaces";

export interface Cart {
    cartId: number;
    items: IAlphaOmegaGrouping[];
    subtotal: number;
    count: number;
}