export  class CitiesErrorResponse {
    private statusCode: number;
    private errorMessage: string;
  
    constructor(statusCode: number, errorMessage: string) {
      this.statusCode = statusCode;
      this.errorMessage = errorMessage;
    }
  
  
    public toJSON(): object {
      return {
        success: false,
        error: {
          code: this.statusCode,
          message: this.errorMessage
        }
      };
    }
  }