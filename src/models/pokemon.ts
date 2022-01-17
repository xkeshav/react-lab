
export type Item = { name: string; url: string };

export type Ability = Item;

export type PokeMon = {
	[index: string]: any;
	name: string;
	weight: number;
	height: number;
	abilityList: Ability[];
};

export type PokeMonListing = {
	count: null | number;
	next: null | string;
	previous: null | number;
	results: Item[];
} 