import {Grid} from "./grid.abstract-class.ts";
import {PixelSection} from "./pixel-section.class.ts";
import {CCSymbolGrid} from "./cc-symbol-grid.class.ts";

export class PixelSectionGrid extends Grid<PixelSection> {
    public getDefault(): PixelSection {
        return new PixelSection([[false, false], [false, false], [false, false]]);
    }

    public convertToSymbolGrid(): CCSymbolGrid {
        const symbolGrid = new CCSymbolGrid(this.width, this.height);

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                symbolGrid.set(x, y, this.get(x, y).convertToSymbol())
            }
        }

        return symbolGrid
    }
}