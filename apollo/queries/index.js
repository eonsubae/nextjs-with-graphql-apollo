const { gql } = require('apollo-boost');

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(
      input: {
        title: "New title"
        company: "New company"
        companyWebsite: "New website"
        location: "New location"
        jobTitle: "New jobtitle"
        description: "New Description"
        startDate: "12/12/2012"
        endDate: "14/11/2013"
      }
    ) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(
      id: $id
      input: {
        title: "Updated title"
        company: "Updated company"
        companyWebsite: "Updated website"
        location: "Updated location"
        jobTitle: "Updated jobtitle"
        description: "Updated Description"
        startDate: "12/12/2012"
        endDate: "14/11/2013"
      }
    ) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;
