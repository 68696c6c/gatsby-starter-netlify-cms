import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const FirstPageTemplate = ({ title, description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{description}</p>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FirstPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FirstPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <FirstPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      content={post.html}
    />
  )
}

FirstPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FirstPage

export const firstPageQuery = graphql`
  query FirstPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
