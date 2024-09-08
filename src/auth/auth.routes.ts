import { Router } from "express";

import signUp from "./controllers/signup";
import signIn from "./controllers/signin";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

const authRouter = router;
export default authRouter;
