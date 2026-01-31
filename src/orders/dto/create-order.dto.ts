export class CreateOrderDto {
    reference: string;
    totalPrice: number;
    totalPriceBV: number;
    profitability: number;
    spent: number;
    status: "pendente" | "finalizado" | "enviado";
    create_at: Date;
    client_id: number;
};