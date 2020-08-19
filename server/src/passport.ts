import passport from 'passport';
import google from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';
import '../env';

const prisma = new PrismaClient();
const GoogleStrategy = google.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `http://localhost:4000/api/google/callback`,
    },
    async function (
      accessToken,
      refreshToken,
      { provider, _json: profile },
      callback
    ) {
      try {
        const user = await prisma.user.upsert({
          where: { email_provider: { email: profile.email, provider } },
          select: { id: true, email: true, provider: true, role: true },
          update: {},
          create: { provider, email: profile.email },
        });
        await prisma.user_profile.upsert({
          where: { user_id: user.id },
          update: {},
          create: { name: profile.name, user: { connect: { id: user.id } } },
        });
        return callback('', user);
      } catch (error) {
        return callback(error);
      }
    }
  )
);
