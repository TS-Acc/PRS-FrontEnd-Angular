import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class Requestline {

    id: number = 0;
    quantity: number = 0;

    requestId: number = 0;
    requests!: Request;

    productId: number = 0;
    products!: Product;

}