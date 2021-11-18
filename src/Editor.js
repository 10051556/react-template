import { useState } from 'react'
import AceEditor from 'react-ace'

// import mode-<language> , this imports the style and colors for the selected language.
import 'ace-builds/src-noconflict/mode-javascript'
// there are many themes to import, I liked monokai.
import 'ace-builds/src-noconflict/theme-monokai'
// this is an optional import just improved the interaction.
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'

function App() {
    const [code, setCode] = useState(`# This program prints Hello, world!

print('Hello, world!')
`)

    return (
        <AceEditor
            placeholder="Placeholder Text"
            mode="python"
            theme="github"
            name="blah2"
            // onLoad={this.onLoad}
            // onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`# This program prints Hello, world!

print('Hello, world!')
`}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }} />

    )
}

export default App