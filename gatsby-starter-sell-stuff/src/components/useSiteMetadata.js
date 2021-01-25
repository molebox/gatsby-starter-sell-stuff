import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            currency
            allowedCountries
            owner
            homePage {
              callToActionTitle
              callToActionDescription
              callToActionBtnText
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
