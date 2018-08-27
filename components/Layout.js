import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/darkly/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
