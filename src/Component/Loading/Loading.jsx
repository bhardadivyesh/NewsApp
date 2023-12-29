import { Component } from 'react'
import loading from "../../assets/loading.webp"
export default class Loading extends Component {
  render() {
    return (
        <>
        <img src={loading} />
        </>
    )
  }
}
