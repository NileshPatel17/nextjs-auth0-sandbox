import Layout from '../components/layout';
import { useFetchUser } from '../lib/user';

const About = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <main>
        <h1>Auth0 Settings</h1>
        <div style={{ padding: '14px' }}>
          <span>Environment Variables</span>
          <hr/>
          <code className="code">
            <div># A long, secret value used to encrypt the session cookie</div>
            <div>AUTH0_SECRET='LONG_RANDOM_VALUE'</div>
            <div># The base url of your application</div>
            <div>AUTH0_BASE_URL='http://localhost:3000'</div>
            <div># The url of your Auth0 tenant domain</div>
            <div>AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN.auth0.com'</div>
            <div># Your Auth0 application's Client ID</div>
            <div>AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'</div>
            <div># Your Auth0 application's Client Secret</div>
            <div>AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'</div>
          </code>
        </div>
        <img src="auth0_settings1.png" style={{ border: '1px solid lightgrey', borderRadius: '4px', padding: '4px', width: '1000px', height: '100%' }} />
        <img src="auth0_settings2.png" style={{ border: '1px solid lightgrey', borderRadius: '4px', padding: '4px', width: '1000px', height: '100%' }} />
      </main>

      <footer>

      </footer>
      <style jsx>
        {`
        .code {
          background: #fafafa;
        border-radius: 5px;
        font-size: .9rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
        Bitstream Vera Sans Mono, Courier New, monospace;
        }`
        }
      </style>
    </Layout>
  )
}

export default About