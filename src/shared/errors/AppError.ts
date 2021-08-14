export default class AppError {
  readonly status: number;
  readonly message: string;

  constructor(message: string, status = 400) {
    this.message = message;
    this.status = status;
  }
}
