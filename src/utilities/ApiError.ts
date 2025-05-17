import ApiResponse from "./ApiResponseType";

export class ApiError extends Error {
  status: number;
  message: string;

  constructor(status: number, data: ApiResponse) {
    super(data?.message || "An error ocured");
    this.name = "Api Error";
    this.status = status;
    this.message = data?.message || "An Error ocured";
  }
}
