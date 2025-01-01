export class Pos {
    constructor(public x: number, public y: number) {}

    public add(other: Pos): Pos {
        return new Pos(
            this.x + other.x,
            this.y + other.y
        );
    }

    public subtract(other: Pos): Pos {
        return new Pos(
            this.x - other.x,
            this.y - other.y
        );
    }

    public multiply(other: Pos): number;
    public multiply(other: number): Pos;
    public multiply(other: Pos | number): Pos | number {
        return typeof other === 'number' ? new Pos(
            this.x * other,
            this.y * other
        ) : this.x * other.x + this.y * other.x;
    }

    public divide(other: number): Pos {
        return new Pos(
            this.x / other,
            this.y / other
        )
    }

    public length(): number {
        return Math.sqrt(this.multiply(this))
    }

    public normalized(): Pos {
        return this.divide(this.length());
    }

    public max(absolute = false): number {
        return absolute
            ? Math.max(Math.abs(this.x), Math.abs(this.y))
            : Math.max(this.x, this.y);
    }

    public min(absolute = false): number {
        return absolute
            ? Math.min(Math.abs(this.x), Math.abs(this.y))
            : Math.min(this.x, this.y);
    }
}

