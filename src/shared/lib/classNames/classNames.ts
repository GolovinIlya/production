<<<<<<< HEAD
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
=======
type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
>>>>>>> bad9de3 (add jest)
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
<<<<<<< HEAD
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}
=======
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(" ");
}
>>>>>>> bad9de3 (add jest)
