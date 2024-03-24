
export type ProfilProps = {
    img: string | null,
    name: string,
    description: string,
    program: string,
    title: string,
    pressFn: () => void
}

export type IconsProps = {
    color: string,
    name: string,
    size: number,
    pressFn?: () => void
}