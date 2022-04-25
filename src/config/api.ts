export class ApiConfigurations {
  port;
  baseUrl;

  constructor() {
    this.port = process.env.PORT;
    this.baseUrl = process.env.API_BASE_URL ?? 'v1/arbol';
  }
}
