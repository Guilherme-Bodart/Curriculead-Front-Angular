export interface IRest {
  className: string;

  Serialize(): any;
  Deserialize(data: any): any;
}
