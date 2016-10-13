import React from 'react'

class App extends React.Component {
  render() {
    return (
        <div>
            <div style={{ padding: 20 }}>
                {this.props.children}
            </div>
        </div>
    )
  }
}

module.exports = App