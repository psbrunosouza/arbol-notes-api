export class ApiConfigurations {
  port;
  baseUrl;

  constructor() {
    this.port = process.env.API_REST_PORT ?? 3333;
    this.baseUrl = process.env.API_BASE_URL ?? 'v1/arbol';
  }
}
