import passport from 'passport';
import express from 'express';
import '../env';

const router = express.Router();
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/api/google' }),
  (req: any, res: any, next: any) => {
    res.redirect('http://localhost:3000');
  }
);

export default router;
