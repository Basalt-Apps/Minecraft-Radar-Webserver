import {Grid} from "./grid.abstract-class.ts";
import {PixelSectionGrid} from "./pixel-section-grid.class.ts";
import {Pos} from "./pos.class.ts";

export class PixelGrid extends Grid<boolean> {
    constructor(protected width: number, protected height: number) {
        if (width % 2 !== 0 || height % 3 !== 0) throw new Error("bruh");

        super(width, height);
    }

    public getDefault(): boolean {
        return false;
    }

    public convertToPixelSectionGrid(): PixelSectionGrid {
        const pixelSectionGrid = new PixelSectionGrid(this.width / 2, this.height / 3);

        for (let Y = 0; Y < this.height / 3; Y++) {
            for (let X = 0; X < this.width / 2; X++) {
                const section = pixelSectionGrid.get(X, Y);

                for (let y = 0; y < 3; y++) {
                    for (let x = 0; x < 2; x++) {
                        section.grid[y][x] = this.get(2 * X + x, 3 * Y + y)
                    }
                }

            }
        }

        return pixelSectionGrid;
    }

    public drawCircle(center: Pos, radius: number, value = true, scale = new Pos(1, 1)): void {
        const maxScale = scale.max(true)
        const density = 8 * radius * maxScale;

        for (let i = 0; i < density; i++) {
            const angle = i / density * 2 * Math.PI;

            const x = Math.floor(radius * Math.cos(angle) + center.x + 0.5);
            const y = Math.floor(radius * Math.sin(angle) + center.y + 0.5);

            this.set(x, y, value)
        }
    }

    public drawCrosshair(): void {
        for (let i = 0; i < this.height; i++) {
            this.set(Math.floor(this.width / 2), i, true)
        }

        for (let i = 0; i < this.width; i++) {
            this.set(i, Math.floor(this.height / 2), true)
        }
    }
}

