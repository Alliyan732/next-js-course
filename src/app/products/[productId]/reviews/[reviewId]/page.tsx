import { notFound } from "next/navigation"

export default function ReviewDetail({ params } : {params : {productId : string, reviewId: string}}) {
    
    if (parseInt(params.reviewId) > 100) {
        notFound();
    }
    else {
        return <h1>Review {params.reviewId} for Product {params.productId}</h1>

    }
}