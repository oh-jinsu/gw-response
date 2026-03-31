import { Exception, type Err } from "gw-result";
import { httpException } from "./exception";

export const httpExceptionFromErr = (
  status: number = 500,
  err: Err<unknown>,
) => {
  if (err.error instanceof Exception) {
    return httpException(status, {
      code: err.error.code,
      message: err.error.message,
    });
  }

  if (err.error instanceof Error) {
    return httpException(status, {
      code: err.error.name,
      message: err.error.message,
    });
  }

  return httpException(status, {
    code: "INTERNAL_SERVER_ERROR",
    message: "알 수 없는 오류가 발생했습니다.",
  });
};
