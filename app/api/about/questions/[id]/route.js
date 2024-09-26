import { createDeleteHandler } from '../../../../../lib/api2-handlers';

export const DELETE = createDeleteHandler(
  'questions',
  '/api/about/questions/[id]'
);
