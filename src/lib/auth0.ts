import { initAuth0 } from '@auth0/nextjs-auth0'
import { SignInWithAuth0 } from '@auth0/nextjs-auth0/dist/instance'

const auth0: SignInWithAuth0 = initAuth0({
  issuerBaseURL: process.env.AUTH0_ISSUER_DOMAIN,
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  // routes: {
    // callback: '/api/auth/callback',
    // postLogoutRedirect: 'http://localhost:3000',
  // }
})

export default auth0