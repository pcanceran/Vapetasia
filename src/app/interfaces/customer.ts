import { Address } from "./address";

export interface Customer {
    type?: 'guest' | 'registered';
    firstName: string;
    lastName: string;
    email: string;
    group: string;
    defaultBilling: string;
    defaultShipping: string;
    addresses: Address[];
}
