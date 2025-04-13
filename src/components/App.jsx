import { jsx } from 'hono/jsx'
import Layout from './Layout'
import Footer from './Footer'

const App = (props) => {
  const { env, country } = props
  return (
    <Layout country={country}>
<div class='content'> <Footer /> </div> </Layout>
  )
}

export default App
