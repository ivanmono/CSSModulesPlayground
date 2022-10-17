import React from 'react'
import Button from '../components/Button/Button'
import Rect from '../components/Rect/Rect'
import Layout from '../components/Layout/Layout'

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1 className="mb-sml-2">CSS Modules playground</h1>
            <p>Let's play!</p>

            <Layout size={"four"} />

            <Rect value={"I am rectangle."} toggle={"is-toggled"} color={"red"} margin={"mb-sml-2"}/>

            <Button type={"primary"} size={"base"} value={"Submit"}/>
            <Button type={"secondary"} size={"base"} value={"Submit"}/>
        </div>
    )
  }
}
