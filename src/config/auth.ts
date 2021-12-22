export class AuthConfigurations {
  secret;
  expiresIn;

  constructor() {
    this.secret = process.env.JWT_SECRET;
    this.expiresIn = process.env.JWT_EXPIRES_IN;
  }
}
