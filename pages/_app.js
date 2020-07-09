import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';

const MyApp = ({ Component, pageProps }) => {
  const isHomePage = () => Component.name === 'Home';

  return (
    <div className="portfolio-app">
      <Navbar />
      {isHomePage() && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
      {/* FOOTER STARTS */}
      {isHomePage() && (
        <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
          <div className="container text-center">
            <small>Copyright &copy; Your Website</small>
          </div>
        </footer>
      )}
      {/* FOOTER ENDS */}
    </div>
  );
};

/* 
  Next.js는 getInitialProps가 호출되지 않는 페이지는 
  static file로 만들어 최적화 시켜준다.
  이 기능을 이용하고 싶다면 전체 컴포넌트에 적용되는 _app.js의 getInitialProps를 사용하지 않아야 한다
*/

MyApp.getInitialProps = async (context) => {
  console.log('GET INITIAL PROPS _APP');
  const initialProps =
    App.getInitialProps && (await App.getInitialProps(context));

  return {
    pageProps: { appData: 'Hello _App Component', ...initialProps.pageProps },
  };
};

export default MyApp;
