import { createApiHandlers } from '../../../../lib/api-handlers';

const handlers = createApiHandlers('lectorium');

export const GET = handlers.GET;
export const POST = handlers.POST;
