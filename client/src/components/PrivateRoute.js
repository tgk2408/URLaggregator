import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({ component: Component, ...rest }) {
    const currentToken = JSON.parse(localStorage.getItem('token'))

  return (
    <Route
      {...rest}
      render={props => {
        return currentToken ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}