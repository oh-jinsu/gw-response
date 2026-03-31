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

export const createHttpException = (status: number) => {
  return (
    error: {
      code: string;
      message: string;
    },
    init?: ResponseInit,
  ) => {
    return httpException(status, error, init);
  };
};

export const httpBadRequest = createHttpException(400);

export const httpUnauthorized = createHttpException(401);

export const httpForbidden = createHttpException(403);

export const httpNotFound = createHttpException(404);

export const httpMethodNotAllowed = createHttpException(405);

export const httpConflict = createHttpException(409);

export const httpGone = createHttpException(410);

export const httpTooManyRequests = createHttpException(429);

export const httpInternalServerError = createHttpException(500);
