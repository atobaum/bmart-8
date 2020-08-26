import { Router } from 'express';
import { googleLogin, googleLoginCallback } from '../../controllers/google';
import { HTTP_STATUS } from '../../utils';

const router = Router();
router.get('/', googleLogin);
router.get(
  '/callback',
  googleLoginCallback,
  (req: any, res: any, next: any) => {
    res.redirect(
      `http://localhost:3000/loginCallback?token=${req.authInfo.token}`
    );
  }
);

export default router;
