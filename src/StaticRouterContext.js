import React, {Component} from 'react'
import {StaticRouter as Router, Route} from 'react-router-dom'

// This example renders a route within a StaticRouter and populates its
// staticContext, which it then prints out. In the real world you would
// use the StaticRouter for server-side rendering:
//
// import express from "express";
// import ReactDOMServer from "react-dom/server";
//
// const app = express()
//
// app.get('*', (req, res) => {
//   let staticContext = {}
//
//   let html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={staticContext}>
//       <App /> (includes the RouteStatus component below e.g. for 404 errors)
//     </StaticRouter>
//   );
//
//   res.status(staticContext.statusCode || 200).send(html);
// });
//
// app.listen(process.env.PORT || 3000);

function RouteStatus(props) {
  return (
    <Route 
      render={({staticContext}) => {
        if(staticContext){
          staticContext.statusCode = props.statusCode
        }

        return <div>{props.children}</div>
      }}
    />
  )
}

function PrintContext(props) {
  return <p>Static context: {JSON.stringify(props.staticContext)}</p>
}

export default class StaticRouterExample extends Component {
  staticContext = {}

  render() {
    return (
      <Router location="/foo" context={this.staticContext}>
        <div>
          <RouteStatus statusCode={404}>
            <p>Route with statusCode 404</p>
            <PrintContext staticContext={this.staticContext}/>
          </RouteStatus>
        </div>
      </Router>
    )
  }
}