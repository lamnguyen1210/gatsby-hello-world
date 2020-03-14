import React from "react"
import { Router } from "@reach/router";
import { withPrefix } from 'gatsby'

const PreviewTest = props => <h2>Preview {props.previewId}</h2>;

export default class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <PreviewTest path={withPrefix('/preview/:previewId')} />
                </Router>
            </div>
        )
    }
}