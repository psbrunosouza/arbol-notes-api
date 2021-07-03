export interface ResponseModel {
  response: {
    data?: Object;
    errors?: string[];
    status: number;
    success: boolean;
  };
}
