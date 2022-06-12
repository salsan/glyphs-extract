export interface XmlDeclarationInterface {
    _attributes: {
        version:number;
        standalone:string;
    }
}

export interface XmlGlyphInterface {
    _attributes:{
        unicode: string;
        'glyph-name': string;
        'data-tags': string;
        d: string;
    }
}

export interface XmlFontInterface {
    _attributes: {
        id: string;
        'horiz-adv-x': number;
    };
    'font-face': {
        _attributes: {
            'unit-per-em': number;
            ascent: number;
        }
    };
    'missing-glyph': {
        _attributes: {
            'horizon-adv-x': number;
        }
    };
    glyph:Array<XmlGlyphInterface>;
}

export interface XmlSvgInterface {
    _attributes: {
        xmls: string;
        metadata: {};
    };
    defs:{
        font:XmlFontInterface
    }
}

export interface XmlInterface {
    _declaration: XmlDeclarationInterface;
    _doctype: string;
    svg: XmlSvgInterface;
}
