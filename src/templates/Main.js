import React from 'react'
import Head from '../components/Head'
import '../globalCSS/base.globals.css'
import '../globalCSS/vars.colors.css'
import '../globalCSS/vars.globals.css'
import '../globalCSS/utils.margins.css'

export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules'/>
        <body>
            {this.props.children} 
        </body>
      </html>
    )
  }
}