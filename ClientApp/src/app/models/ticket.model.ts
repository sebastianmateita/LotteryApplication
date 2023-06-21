export class TicketModel {
  public id: string | undefined;
  public createdDate: Date | undefined;
  public draws: Draw[] | undefined;
  public superZahl: number | undefined;
}

export class Draw {
  public pickedNumbers: number[] | undefined;
}
