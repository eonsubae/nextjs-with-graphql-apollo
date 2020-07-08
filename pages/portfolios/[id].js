import { useRouter } from 'next/router';

/*
const PortfolioDetail = ({ query }) => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>I am Detail Page with ID: {id}</h1>;
};
*/

const PortfolioDetail = ({ query }) => {
  const { id } = query;

  return <h1>I am Detail Page with ID: {id}</h1>;
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};

/*
class PortfolioDetail extends React.Component {
  // Called on the server
  static getInitialProps({ query }) {
    // What you return here will get into this.props
    return { query, test: 'Hello World' };
  }

  render() {
    const { id } = this.props.query;

    return (
      <h1>
        I am Detail Page with ID: {id} {this.props.test}
      </h1>
    );
  }
}
*/

export default PortfolioDetail;
