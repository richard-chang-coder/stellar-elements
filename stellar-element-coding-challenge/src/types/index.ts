export type VolumeInfo = {
	title: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: { type: string; identifier: string }[];
	readingModes: { text: boolean; image: boolean };
	pageCount: number;
	printType: string;
	categories: string[];
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	dimensions: { height: number; width: number; thickness: number };
	panelizationSummary: {
		containsEpubBubbles: boolean;
		containsImageBubbles: boolean;
	};
	imageLinks: { smallThumbnail: string; thumbnail: string };
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
};

export type SaleInfo = {
	country: string;
	saleability: string;
	isEbook: boolean;
};

export type AccessInfo = {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: { isAvailable: boolean };
	pdf: { isAvailable: boolean };
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
};

export type Book = {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: VolumeInfo;
	saleInfo: SaleInfo;
	accessInfo: AccessInfo;
};
export type BooksApiResponse = {
	kind: 'books#volumes';
	totalItems: number;
	items: Book[];
};
