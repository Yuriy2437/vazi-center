import { createApiHandlers } from '../../../../lib/api-handlers';

const handlers = createApiHandlers('kids_club');

export const GET = handlers.GET;
export const POST = handlers.POST;
