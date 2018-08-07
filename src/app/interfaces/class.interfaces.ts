import { IInventory } from "./products.interfaces";

export interface ISalesforceProductController {
    updateProductInventory(items: IInventory[]): void;
}