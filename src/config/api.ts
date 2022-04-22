export class ApiConfigurations {
  port;
  baseUrl;

  constructor() {
    this.port = process.env.PORT ?? 3333;
    this.baseUrl = process.env.API_BASE_URL ?? 'v1/arbol';
  }
}
