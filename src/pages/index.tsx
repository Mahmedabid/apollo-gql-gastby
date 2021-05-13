import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';

export const GET_TODO = gql`
{
  bookmarks {
    desc,
    url,
    id,
    date,
  }
}
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_TODO);

  if (loading) {
    return (
      <Layout>
        <SEO title="Todo" />
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <SEO title="Todo" />
        <h3>Error, Please try again later</h3>
      </Layout>
    );
  }

  if (data) {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to Gatsby starter.</p>
        <p> It includes:</p>
        <ul>
          <li>Typescript</li>
          <li>Material-ui</li>
          <li>Redux toolkit</li>
          <li>Dark Theme</li>
          <li>dotenv</li>
          <li>apollo</li>
          <li>graphql</li>
          <li>faunadb</li>
        </ul>
        <p>In order to change the title, description and other details go to gatsby-config file and edit the title</p>
      </Layout>
    );
  }
}
export default IndexPage
