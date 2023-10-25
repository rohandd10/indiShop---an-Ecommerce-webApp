import { Button, Rating } from '@mui/material';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    images: [
        {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
        },
        {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
        },
        {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
        },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function ProductCardDetail() {

    return (

    <div className="bg-#D2D2D2">
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
            {/* Image gallery */}
            <div className="flex flex-col items-center">
                <div className="overflow-hidden rounded-lg max-w-[25rem] max-h-[35rem]">
                    <img src={product.images[0].src} alt={product.images[0].alt} className="h-full w-full object-cover object-center"/>
                </div>
                <div className="flex flex-wrap space-x-5 justify-center">
                    { product.images.map((image)=>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                            <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center"/>
                        </div>
                    )}
                </div>
            </div>

            {/* Product info */}
            <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 lg:grid sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Product Name</h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <div className='flex space-x-5 items-center text-lg lg:text-xl text-grey-900 mt-6'>
                        <p className='font-semibold'>Price</p>
                        <p className='opacity-50 line-through'>Price</p>
                        <p className='text-green-600 font-semibold'>Price</p>
                    </div>

                    {/* Reviews */}
                    <div className="mt-8">
                        <Rating name='read-only' value={5} readOnly/>
                    </div>

                    <form className="mt-6">
                        {/* Brand */}
                        <div className='flex space-x-14 items-center'>
                            <h3 className="text-sm font-medium text-gray-900">Brand</h3>
                            <p className="font-semibold text-lg lg:text-xl text-grey-900">Brand</p>
                        </div>
                        {/* Sizes */}
                        <div className="flex space-x-9 items-center mt-6">
                            <h3 className="text-sm font-medium text-gray-900">Category</h3>
                            <p className="font-semibold text-lg lg:text-xl text-grey-900">Category</p>
                        </div>
                        <div className='mt-10'>
                            <Button variant='contained' sx={{px:'25px', py:'10px'}}>Add to Cart</Button>
                        </div>
                    </form>
                </div>

                <div className="mt-6 py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">Description</h3>
                        <div className="space-y-6 mt-4">
                            <p className="text-base text-gray-600">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}