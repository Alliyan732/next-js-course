export default function Products({params} : {params : {productId : string}}) {
    return <h1>Product {params.productId} Details Page</h1>
}