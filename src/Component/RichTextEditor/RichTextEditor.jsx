import { useState,useRef } from "react"
import JoditEditor from "jodit-react"
// import HTMLReactParser from "html-react-parser"

function RichTextEditor() {

    const editor = useRef(null)
    const [content, setContent] = useState("")

  return (
    <>
    <div>RichTextEditor</div>
    <JoditEditor
    ref={editor}
    value={content}
    onChange={newContent => setContent(newContent)}

     />
    </>
  )
}

export default RichTextEditor