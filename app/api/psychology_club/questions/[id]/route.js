import { createDeleteHandler } from '../../../../../lib/api2-handlers';

export const DELETE = createDeleteHandler(
  'psychology_club',
  '/api/psychology_club/questions/[id]'
);
