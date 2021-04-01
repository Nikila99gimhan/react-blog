import React from 'react'
import {useRouteMatch} from 'react-router-dom'

const generatePage = page => {
 const Component = () => require(`./pages/${page}`).default



  try {
    return React.createElement(Component())
  } catch (err) {
    console.warn(err)
    return React.createElement(() => 404)
  }
}

const PageRenderer = () => {
  const {
    params: { page }
  } = useRouteMatch()

  return generatePage(page)
}

export default PageRenderer