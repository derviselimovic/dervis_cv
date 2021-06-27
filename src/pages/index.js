import React from 'react';
import { graphql } from 'gatsby';

import Resume from '../components/resume';

const Page = ({ data }) => {
  const resume = data.allDatoCmsCv.edges[0].node;
  console.log(resume)
  return <Resume resume={resume} />;
};

export default Page;

export const query = graphql`
  query MyQuery {
    allDatoCmsCv {
      edges {
        node {
          name
          currentJobPosition
          about
          workExperience {
            company
            enddate(formatString: "DD.MM.YY")
            highlights {
              value
            }
            startdate(formatString: "DD.MM.YY")
            jobPosition
            id
            companyWebsite
          }
          education {
            university
            startdate(formatString: "DD.MM.YY")
            enddate(formatString: "DD.MM.YY")
            id
            course
            degree
          }
          skills {
            skill
            technologyList {
              value
            }
            id
          }
          profiles {
            network
            profileUrl
            id
            username
          }
          contact {
            email
            id
            phone
          }
          languages {
            language
            languageLevel
            id
          }
        }
      }
    }
  }
`;
