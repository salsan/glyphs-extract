export interface GlyphInterface {
    name :string;
    unicode :number;
    path :string;
}

export interface GlyphsJsonInterface {
    name :string;
    item :Array<GlyphInterface>;
}
