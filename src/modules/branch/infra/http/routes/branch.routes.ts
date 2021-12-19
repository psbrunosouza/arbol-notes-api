import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import BranchController from '@modules/branch/infra/http/controllers/BranchController';
import { branchSchema } from '@modules/branch/schemas/branch.schema';

const BranchRoutes = Router();

BranchRoutes.post('/', BranchController.create, [
  celebrate({ [Segments.BODY]: branchSchema }),
]);
BranchRoutes.put('/:id', BranchController.update, [
  celebrate({ [Segments.BODY]: branchSchema }),
]);
BranchRoutes.get('/', BranchController.list);
BranchRoutes.get('/:id', BranchController.show);
BranchRoutes.delete('/:id', BranchController.delete);

export { BranchRoutes };
