import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Only public routes visitors can access. Authentication needed for all others.
  publicRoutes: [
    '/sign-in',
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};