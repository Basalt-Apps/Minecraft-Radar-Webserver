import {Grid} from "./grid.abstract-class.ts";
import type {CCSymbol} from "./cc-symbol.class.ts";
import {Globals} from "../globals.const.ts";

export class CCSymbolGrid extends Grid<CCSymbol> {
    public getDefault(): CCSymbol {
        return { char: 128, bg: Globals.backgroundColor, fg: Globals.foregroundColor};
    }
}