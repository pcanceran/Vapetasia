export interface ProductGroup {
    name: string;
    type: string;
    subType?: string;
    sku: string;
    thumbnail: string;
    groupings: Group[];
    images: string[];
    categories: string[];
    description: string;
    shortDescription: string;
    state?: number;
}

export interface Group {
    name: string;
    sku: string; // refrence to parent
    products: Product[];
    images: string[];
    inCart?: boolean;
}

export interface Product {
    sku: string;
    pricing: PricingGroups[];
    msrp: number;
    stocked: number;
    customerPrice?: number;
    qty?: number;
    inCart?: number;
    descriptor: string;
    size?: string;
    nic?: string;
    color?: string;
    item_id?: number; // for cart update
    show?: boolean;
}

interface PricingGroups {
    customer_group_id: number;
    qty: number;
    value: number;
    extension_attributes?: {
        website_id?: number
    };
}

interface Properties {
    key: string;
    value: string;
}
