export type features = 'High' | 'Low' | 'default';

export type Size = 'S' | 'M' | 'L' | 'XL'

export interface IProducts {
    id: number
    image: string
    brand: string
    product: string
    product_desc: string
    price: string
    original_price: string,
    discount: string,
    size: Array<Size>,
    gender: string
}