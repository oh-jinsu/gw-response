import { httpResponse } from "./response";

export const httpException = (
  status: number,
  error: {
    code: string;
    message: string;
  },
  init?: ResponseInit,
) => {
  return httpResponse(status, error, init);
};

export const createHttpException = (
  status: number,
  defaultError: { code: string; message: string },
) => {
  return (
    error: {
      code: string;
      message: string;
    } = defaultError,
    init?: ResponseInit,
  ) => {
    return httpException(status, error, init);
  };
};

export const httpBadRequest = createHttpException(400, {
  code: "BAD_REQUEST",
  message: "요청이 잘못되었습니다.",
});

export const httpUnauthorized = createHttpException(401, {
  code: "UNAUTHORIZED",
  message: "인증되지 않았습니다.",
});

export const httpForbidden = createHttpException(403, {
  code: "FORBIDDEN",
  message: "접근이 금지되었습니다.",
});

export const httpNotFound = createHttpException(404, {
  code: "NOT_FOUND",
  message: "찾을 수 없습니다.",
});

export const httpMethodNotAllowed = createHttpException(405, {
  code: "METHOD_NOT_ALLOWED",
  message: "허용되지 않는 메서드입니다.",
});

export const httpConflict = createHttpException(409, {
  code: "CONFLICT",
  message: "충돌이 발생했습니다.",
});

export const httpGone = createHttpException(410, {
  code: "GONE",
  message: "사라졌습니다.",
});

export const httpTooManyRequests = createHttpException(429, {
  code: "TOO_MANY_REQUESTS",
  message: "요청이 너무 많습니다.",
});

export const httpInternalServerError = createHttpException(500, {
  code: "INTERNAL_SERVER_ERROR",
  message: "서버 내부 오류가 발생했습니다.",
});
