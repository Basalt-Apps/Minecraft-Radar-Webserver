export abstract class Grid<T> {
    protected readonly grid: T[][];

    public constructor(protected width: number, protected height: number) {
        this.grid = [];
        for (let y = 0; y < height; y++) {
            this.grid[y] = [];

            for (let x = 0; x < width; x++) {
                this.grid[y][x] = this.getDefault();
            }
        }
    }

    public abstract getDefault(): T;

    public get(x: number, y: number): T {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return this.getDefault();
        return this.grid[y][x];
    }

    public set(x: number, y: number, value: T): void {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;
        this.grid[y][x] = value;
    }
}



