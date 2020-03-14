import React from "react"

const browser = typeof window !== "undefined" && window;

export default () => (
    browser && (
        <div>
            <h1>Page Not Found</h1>
            <p>Oops, we couldn't find this page!</p>
        </div>
    )
)