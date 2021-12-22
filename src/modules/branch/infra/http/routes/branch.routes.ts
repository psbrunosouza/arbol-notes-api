import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import BranchController from '@modules/branch/infra/http/controllers/BranchController';
import { branchSchema } from '@modules/branch/schemas/branch.schema';
import { ensureAuthenticatedMiddleware } from '@shared/middlewares/ensure-authenticated.middleware';

const BranchRoutes = Router();

BranchRoutes.post('/', ensureAuthenticatedMiddleware, BranchController.create, [
  celebrate({ [Segments.BODY]: branchSchema }),
]);
BranchRoutes.put(
  '/:id',
  ensureAuthenticatedMiddleware,
  BranchController.update,
  [celebrate({ [Segments.BODY]: branchSchema })],
);
BranchRoutes.get(
  '/roots',
  ensureAuthenticatedMiddleware,
  BranchController.listBranchesWithoutChildren,
);
BranchRoutes.get('/:id', ensureAuthenticatedMiddleware, BranchController.show);
BranchRoutes.delete(
  '/:id',
  ensureAuthenticatedMiddleware,
  BranchController.delete,
);

export { BranchRoutes };
