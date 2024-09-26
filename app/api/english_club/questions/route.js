import { createApiHandlers } from '../../../../lib/api-handlers';

const handlers = createApiHandlers('englishclub');

export const GET = handlers.GET;
export const POST = handlers.POST;
