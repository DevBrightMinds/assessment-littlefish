type  TProduct = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: TProductRating
}

type TProductRating = {
    rate: number
    count: number
}

type TMenuItem = {
    name: string
    linkTo: string
    icon: string
}