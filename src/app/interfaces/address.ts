export interface Address {
    name: string; // Name of person.
    company: string; // Name of company.
    street1: string; // First line of address.
    street2: string; // Second line of address.
    street3: string; // Third line of address.
    city: string; // City
    state: string; // State
    postalCode: string; // Postal Code
    country: string; // Country Code. The two-character ISO country code is required.
    phone: string; // Telephone number.
    residential: boolean; // Specifies whether the given address is residential.
    addressVerified: string;
}

export interface NewAddress {
    firstName?: string;
    lastName?: string;
    street?: string[];
    city?: string;
    zipCode?: string;
    telephone?: string;
    selectedRegion?: RegionCode;
}

export interface Country {
    code: string;
    name: string;
}

export interface RegionCode {
    region_id: string;
    country_id: string;
    code: string;
    default_name: string;
}