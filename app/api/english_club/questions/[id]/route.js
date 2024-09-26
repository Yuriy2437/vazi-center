import { createDeleteHandler } from '../../../../../lib/api2-handlers';

export const DELETE = createDeleteHandler(
  'englishclub',
  '/api/english_club/questions/[id]'
);
