const express = require('express');
const next = require('next');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const data = {
  portfolios: [
    {
      _id: '32das7d89',
      title: 'Job in USA',
      content: 'It was very nice experience',
      jobTitle: 'Chef',
      daysOfExperience: 100,
      isCurrentlyEmployed: false,
    },
    {
      _id: '21qw1c31e123',
      title: 'Job in Barcelona',
      content: 'It was very sunny experience',
      jobTitle: 'Developer',
      daysOfExperience: 133,
      isCurrentlyEmployed: true,
    },
    {
      _id: '1bwc11456',
      title: 'Job in Germany',
      content: 'It was very good experience',
      jobTitle: 'Manager',
      daysOfExperience: 30,
      isCurrentlyEmployed: true,
    },
  ],
};

app.prepare().then(() => {
  const server = express();

  // Construct a schema, using GraphQL schema language
  const schema = buildSchema(`
    type Portfolio {
      _id: ID!
      title: String
      content: String
      jobTitle: String,
      daysOfExperience: Int,
      isCurrentlyEmployed: Boolean
    }

    type Query {
      hello: String
      portfolio: Portfolio
      portfolios: [Portfolio]
    }
  `);

  // The root provides a resolver for each API endpoint
  const root = {
    hello: () => 'Hello World',
    portfolio: () => data.portfolios[0],
    portfolios: () => data.portfolios,
  };

  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    })
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
