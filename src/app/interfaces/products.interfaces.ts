export interface IProduct {
    type: 'Complex' | 'Simple';
    sku: string;
    productFamily: string;
    brand: string;
    msrp: number;
    price: number;
    images: string[];
    inventory: number;
    pendingCart: string;

    //added
    qty?: number;
    inCart?: number;
    customerPrice?: number;
    item_id?: number;
}

export interface ILiquid extends IProduct {
    bottleSize: string;
    nicotine: string;
    salt: boolean; // Denotes if a Simple product is salt nic. Denotes is a complex product has salt nic children.
}

export interface IApparel extends IProduct {

}

export interface ITops extends IApparel {

}

export interface IHeadwear extends IApparel {

}

export interface IPromo extends IProduct {

}

export interface IInventory {
    sku: string;
    inventory: number;
}

export interface IPricing {
    sku: string;
    price: number;
}

export interface IAlphaOmegaGrouping {
    name: string; // Taken from ComplexProduct.name
    sku: string; // Taken from ComplexProduct.sku
    productFamily: string; // Taken from ComplexProduct.sku
    images: string[]; // --------------------------- ???????????????????????
    groupings: IProductsGrouping[]; // Products grouped based on ComplexProduct.productFamily

    //added
    thumbnail: string;
    categories: string[];
    description: string;
    shortDescription: string;
    state?: number;
}
/* 
    E-Liquids: 
        Non-Salts: Ascending Size
            Ascending Nicotine
        Salts: Ascending Size
            Ascending Nicotine 
*/

export interface IProductsGrouping {
    title: string;
    images: string[];
    products: ILiquid[] | IApparel[] | IHeadwear[] | IPromo[];

    //added
    inCart?: boolean;
    name: string;
}
