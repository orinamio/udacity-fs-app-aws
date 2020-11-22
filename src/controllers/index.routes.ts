import { Router } from "express";
import { FilteredImageRouter } from "./v0/image/filter.routes";

const router: Router = Router();

router.use("/filteredimage", FilteredImageRouter);

export const IndexRouter: Router = router;
