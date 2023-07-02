// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare class Products {
	id: string //Stripe id
	name: string //Name of product
	price: string //Price of product
	description: string //Description of product
	image: string //Image of product
	static id: Readable<unknown>;
};

declare class CartItem {
	id: string //Stripe id
	quantity: number //Quantity of product
}

declare class Cart {
	id: string //Stripe id
	quantity: number //Quantity of product
}
 