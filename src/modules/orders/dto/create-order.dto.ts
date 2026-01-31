import { statusOrder } from "../enums/status_order.enum";

export class CreateOrderDto {
    reference: string;
    totalPrice: number;
    totalPriceBV: number;
    profitability: number;
    spent: number;
    status: statusOrder;
    create_at: Date;
    client_id: number;
};