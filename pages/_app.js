import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import styles from '../styles/style.css';
import {UserProvider} from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return  <UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout> 
          </UserProvider>
          
}

export default MyApp
