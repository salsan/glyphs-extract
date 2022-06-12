export interface GlyphInterface {
    name: string ;
    unicode: string;
    path?: string;
}

export interface GlyphsJsonInterface {
    name :string;
    item :Array<GlyphInterface>;
}
