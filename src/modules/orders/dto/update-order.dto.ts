import { statusOrder } from "../enums/status_order.enum";

export class UpdateOrderDto {
    reference: string;
    status: statusOrder;
};