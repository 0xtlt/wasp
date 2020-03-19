import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import prettier from 'prettier/standalone'
import parserBabylon from 'prettier/parser-babylon'

import InfoBox from './InfoBox'

export default class ButtonInfoBox extends Component {
  static propTypes = {
    isXRayModeOn: PropTypes.bool,

    buttonName: PropTypes.string,
    entityName: PropTypes.string,
    actionName: PropTypes.string,
    actionCode: PropTypes.string
  }

  prettifyCode = src => prettier.format(src, {
      parser: "babel",
      plugins: [parserBabylon],
      semi: false
    }
  )

  doesButtonHaveAction = this.props.actionName && this.props.actionCode && this.props.entityName

  render() {
    const { buttonName, entityName, actionName, actionCode } = this.props

    const title = buttonName

    const popoverTitle = (
      <div>
        button <strong>{buttonName}</strong>
      </div>
    )

    const popoverContent = (
      <div>
        {popoverTitle}
        <Divider />
        <br/>

        { this.doesButtonHaveAction && (
            <>
              <div>
                onClick → action&lt;<strong>{entityName}</strong>&gt; 
                &nbsp;<strong>{actionName}</strong>:
              </div>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {this.prettifyCode(actionCode)}
              </SyntaxHighlighter>
            </>
          )
        }

      </div>
    )

    return (
      <InfoBox
        isXRayModeOn={this.props.isXRayModeOn}
        component={this.props.children}
        title={title}
        popoverContent={popoverContent}
      />
    )
  }

}
