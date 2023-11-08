import React, { useEffect, useRef, useState } from 'react'
import Header from '../header/header'
import "./addcomponent.css"

const AddComponent = () => {
    const [componentName, setComponentName] = useState("")
    const [componentType, setComponentType] = useState("code")
    const [programmingLanguage, setProgrammingLanguage] = useState("none")
    const [codeBlock, setCodeBlock] = useState("")


    const chooseProgLanguageLabelRef = useRef()
    const chooseProgLanguageOptionRef = useRef()    
    const codeBlockLabelRef = useRef()
    const codeBlockOptionlRef = useRef()

    const diagramLabelRef = useRef()
    const diagramOptionRef = useRef()


    useEffect(()=>{
        if (componentType == "code"){
            diagramLabelRef.current.classList.add("hidden")
            diagramOptionRef.current.classList.add("hidden")
            chooseProgLanguageLabelRef.current.classList.remove("hidden")
            chooseProgLanguageOptionRef.current.classList.remove("hidden")
            codeBlockLabelRef.current.classList.remove("hidden")
            codeBlockOptionlRef.current.classList.remove("hidden")
        }
        else{
            diagramLabelRef.current.classList.remove("hidden")
            diagramOptionRef.current.classList.remove("hidden")
            chooseProgLanguageLabelRef.current.classList.add("hidden")
            chooseProgLanguageOptionRef.current.classList.add("hidden")
            codeBlockLabelRef.current.classList.add("hidden")
            codeBlockOptionlRef.current.classList.add("hidden")
        }
    }, [componentType])
  return (
    <>
    <Header />
    <form className='add-component'>
        <label>Component Name</label>
        <input name='name' type='text' placeholder='Enter a name for the component' value={componentName} onChange={(e)=>{
            setComponentName(e.target.value.trim())
        }}/>
        <label>Component Type</label>
        <select onChange={(e)=>{
            setComponentType(e.target.value)
        }}>
            <option selected value="code">Code</option>
            <option value="design">Design</option>
        </select>
        <label>Component Category</label>
        <select>
            <option selected hidden>Select a category</option>
            <option>Cetegory 1</option>
            <option>Cetegory 2</option>
            <option>Cetegory 3</option>
        </select>
        <label ref={chooseProgLanguageLabelRef}>Programming Language</label>
        <select onChange={(e)=>{
            setProgrammingLanguage(e.target.value)
        }} ref={chooseProgLanguageOptionRef}>
            <option selected hidden value="none">Choose the code language</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="swift">Swift</option>
            <option value="kotlin">Kotlin</option>
            <option value="others">Others</option>
        </select>
        <label ref={diagramLabelRef}>Upload Component Design</label>
        <input ref={diagramOptionRef} name='design' type='file' accept='image/*'/>
        <label ref={codeBlockLabelRef}>Code Block</label>
        <textarea rows={10} 
        ref={codeBlockOptionlRef}
        onChange={(e)=>{
            setCodeBlock(e.target.value)
        }}>{codeBlock}</textarea>
        <label></label>
        <button type='submit'>Save Component</button>
    </form>
    </>
  )
}

export default AddComponent