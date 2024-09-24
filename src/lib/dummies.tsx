import ImageCar from '../images/imagecarousel.jpeg'
export const areas = ["Indumentaria, Tecnología, Perfumería"]

interface CategoryDummy {
    name: string
    area: 'Indumentaria' | 'Tecnología' | 'Perfumería'
}

interface ProductDummy {
    name: string
    price: number
    category: string
    image: string
}

export const categorys: CategoryDummy[] = [
    {
        name: 'Camisetas',
        area: "Indumentaria"
    },
    {
        name: 'Pantalones',
        area: 'Indumentaria'
    },
    {
        name: 'Calzado',
        area: 'Indumentaria'
    },
    {
        name: 'Computadoras',
        area: 'Tecnología',
    },
    {
        name: 'Celulares',
        area: 'Tecnología'
    },
    {
        name: 'Tablets',
        area: 'Tecnología'
    },
    {
        name: 'Perfumes',
        area: 'Perfumería'
    },
    {
        name: 'Inciensos',
        area: 'Perfumería'
    }
]

export const products: ProductDummy[] = [
    {
        name: 'Camiseta de Argentina',
        price: 9999.99,
        category: 'Camisetas',
        image: 'https://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=truehttps://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=true'
    },
    {
        name: 'Camiseta de Argentina',
        price: 9999.99,
        category: 'Camisetas',
        image: 'https://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=truehttps://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=true'
    },
    {
        name: 'Camiseta de Argentina',
        price: 9999.99,
        category: 'Camisetas',
        image: 'https://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=truehttps://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=true'
    },
    {
        name: 'Pantalón deportivo',
        price: 19999.99,
        category: 'Pantalones',
        image: 'https://acdn.mitiendanube.com/stores/145/898/products/21-06a38d592e5782831316890081182092-1024-1024.jpg'
    },
    {
        name: 'Pantalón deportivo',
        price: 19999.99,
        category: 'Pantalones',
        image: 'https://acdn.mitiendanube.com/stores/145/898/products/21-06a38d592e5782831316890081182092-1024-1024.jpg'
    },
    {
        name: 'Pantalón deportivo',
        price: 19999.99,
        category: 'Pantalones',
        image: 'https://acdn.mitiendanube.com/stores/145/898/products/21-06a38d592e5782831316890081182092-1024-1024.jpg'
    },
    {
        name: 'Zapatilla Nike',
        price: 39999.99,
        category: 'Calzado',
        image: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg'
    },
    {
        name: 'Zapatilla Nike',
        price: 39999.99,
        category: 'Calzado',
        image: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg'
    },
    {
        name: 'Zapatilla Nike',
        price: 39999.99,
        category: 'Calzado',
        image: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg'
    }
    
]

export const ImagesCarousel = [
    {
        name: 'Viva Argentina',
        image: ImageCar
    },
    {
        name: 'Viva Argentina',
        image: ImageCar
    },
    {
        name: 'Viva Argentina',
        image: ImageCar
    },
    {
        name: 'Viva Argentina',
        image: ImageCar
    }
]