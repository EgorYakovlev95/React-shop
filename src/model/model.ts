export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface CategoryFilter {
    category: string
}

export interface Item {
    price: number
    title: string
    id: number
}

export interface InCart {
    title: string
    price: number
    id: number
    image: string
}