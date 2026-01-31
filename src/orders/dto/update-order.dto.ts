export class UpdateOrderDto {
    reference: string;
    status: "pendente" | "finalizado" | "enviado";
};