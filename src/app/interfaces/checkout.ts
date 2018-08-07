import { QuoteDataAddressSchema } from "./interfaces";

export interface Checkout {
}

export interface PaymentInfo {
    cardProfileId: string;
    cvc: string;
    address: QuoteDataAddressSchema;
}

export interface Address {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    zip: string;
    address: string;
    country: string;
}

export interface PaymentProfile {
    customerPaymentProfileId: string;
    billTo: Address;
    payment: {
        creditCard: CreditCard;
    }
}

export interface CreditCard {
    cardNumber: string;
    cardType: string;
    expirationDate: string;
}

export interface ButtonStatus {
    shippingComplete: boolean;
    paymentComplete: boolean;
    rewardsComplete: boolean;
    orderComplete: boolean;
}

export interface CimProfile {
    customerProfileId: string;
    description: string;
    email: string;
    merchantCustomerId: string;
    paymentProfiles: PaymentProfile[];
}


export interface RewardPointsData {
    show: boolean;
    points: any;
    max: number;
    spend: string;
    availible: string;
    used: number;
}

export interface ShippingInformationData { // possibly not used
	methodCode : string;
	carrierCode : string;
	shipping : QuoteDataAddressSchema;
	attributes?: any;
	// optional, just for ease of use.
	pickupDate?: string; // date format: 'mm/dd/yyyy'
	pickupStore?: string; // 1=Vapetasia
}