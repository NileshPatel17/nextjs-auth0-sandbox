
import Layout from '../components/layout';
import {useFetchUser} from '../lib/user';

export default function Home() {
  const { user, loading } = useFetchUser()

  console.log({user})
  return (
    <Layout user={user} loading={loading}>
      <main>
        <h1>Next.js and Auth0 Example</h1>
      </main>

      <footer>
       
      </footer>
    </Layout>
  )
}
