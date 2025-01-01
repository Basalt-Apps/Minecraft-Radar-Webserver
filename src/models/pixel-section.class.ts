import type {Color} from "./colors.enum.ts";
import {Globals} from "../globals.const.ts";
import type {CCSymbol} from "./cc-symbol.class.ts";

export class PixelSection {
    constructor(public grid: [[boolean, boolean], [boolean, boolean], [boolean, boolean]]) {
    }

    public convertToSymbol(): CCSymbol {
        const invertColor = this.grid[2][1];

        const char = 128
            + 2 ** 0 * (+invertColor ^ +this.grid[0][0])
            + 2 ** 1 * (+invertColor ^ +this.grid[0][1])
            + 2 ** 2 * (+invertColor ^ +this.grid[1][0])
            + 2 ** 3 * (+invertColor ^ +this.grid[1][1])
            + 2 ** 4 * (+invertColor ^ +this.grid[2][0])

        return {
            char,
            bg: invertColor ? Globals.foregroundColor : Globals.backgroundColor,
            fg: invertColor ? Globals.backgroundColor : Globals.foregroundColor
        }
    }
}



