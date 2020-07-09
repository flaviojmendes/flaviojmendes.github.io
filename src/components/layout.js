import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "gatsby-image"


const Layout = ({ location, title, children }) => {

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let header = (


        <Link
              to={`/`}  className={'blog-title'}
        >
          <Image
            style={{
              marginTop: 5,
              marginBottom: 10,
            }}
            fluid={data.logo.childImageSharp.fluid} ></Image>
        </Link>

    )

  return (
    <Container
      style={{
      }}
    >
      <Row>
        <Col md={3} xs={12}>
          {header}
        </Col>
      </Row>
      <main>{children}</main>
      <footer>
        <Col  className={'bio'}>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            Do you like my texts? You can buy me a coffee: {' '}
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="LD4JGZCK4VUFC" />
            <input className={'align-middle'} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_IE/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </Col>
      </footer>
    </Container>
  )
}

export default Layout
