export const httpResponse = (
  status: number,
  data: unknown = {},
  init?: ResponseInit,
) => {
  return Response.json(data, { status, ...init });
};

export const createHttpResponse = (status: number) => {
  return (data: unknown = {}, init?: ResponseInit) => {
    return httpResponse(status, data, init);
  };
};

export const httpOk = createHttpResponse(200);

export const httpCreated = createHttpResponse(201);

export const httpAccepted = createHttpResponse(202);

export const httpNoContent = (init?: ResponseInit) => {
  return new Response(null, { status: 204, ...init });
};
