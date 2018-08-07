import { IAlphaOmegaGrouping, IPricing, IInventory } from "./products.interfaces";

export interface ICatalogController {
    products: IAlphaOmegaGrouping[];

    getAllProducts(): any;
    getProductPricings(token: string): any;
    setProductPricings(pricings: IPricing[]): void;
    getProductInventories(): any;
    setProductInventories(inventories: IInventory[]): void
    buildProducts(): IAlphaOmegaGrouping[];
}

export interface IComplexProductBuilder {
    new (product): Object;
    alphaOmegaGrouping: IAlphaOmegaGrouping;
}