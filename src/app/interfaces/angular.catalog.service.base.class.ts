import { IAlphaOmegaGrouping, IInventory, IPricing } from "./products.interfaces";

export class CatalogServiceBase {
    products: IAlphaOmegaGrouping[];

    private getAllProducts(): any {
        
    }

    private getProductPricings(token: string): any {
        // Https to Pricing
    }

    private setProductPricings(pricings: IPricing[]): void {

    }

    private getProductInventories(): any {

    }

    private setProductInventories(inventories: IInventory[]): void {

    }

    private buildProducts(): IAlphaOmegaGrouping[] | void {

    }

}