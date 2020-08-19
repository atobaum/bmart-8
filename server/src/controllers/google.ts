import { authenticate } from 'passport';
import '../../env';

export const googleLogin = authenticate('google', {
  scope: ['profile', 'email'],
});

export const googleLoginCallback = authenticate('google', {
  failureRedirect: '/api/auth/google',
});

export default { googleLogin, googleLoginCallback };
