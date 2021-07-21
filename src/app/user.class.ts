export class User {
  constructor(
  public userName: string,
  public firstName: string,
  public lastName: string,
  public email: string,
  public type: string,
  public password: string,
  public repeatPassword: string,
  ) { }
}
// export interface User {
//   userName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   type: string;
//   password: string;
//   repeatPassword: string;
// }
