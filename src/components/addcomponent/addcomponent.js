import React, { useEffect, useRef, useState } from "react";
import Header from "../header/header";
import "./addcomponent.css";
import ReactCodeMirror from "@uiw/react-codemirror";
import { cpp as lcpp } from "@codemirror/lang-cpp";
import { css as lcss } from "@codemirror/lang-css";
import { html as lhtml } from "@codemirror/lang-html";
import { java as ljava } from "@codemirror/lang-java";
import { javascript as ljs } from "@codemirror/lang-javascript";
import { json as ljson } from "@codemirror/lang-json";
import { php as lphp } from "@codemirror/lang-php";
import { python as lpy } from "@codemirror/lang-python";
import { xml as lxml } from "@codemirror/lang-xml";
import { swift as lswift } from "@codemirror/legacy-modes/mode/swift";
import { ruby as lruby } from "@codemirror/legacy-modes/mode/ruby";
import { rust as lrust } from "@codemirror/legacy-modes/mode/rust";
import { collection, addDoc } from "firebase/firestore";
import { componentStorageName, db } from "../../firebase";

const AddComponent = () => {
  const [componentName, setComponentName] = useState("");
  const [componentType, setComponentType] = useState("code");
  const [programmingLanguage, setProgrammingLanguage] = useState("none");
  const [codeBlock, setCodeBlock] = useState("");
  const [componentCategory, setComponentcategory] = useState("none");
  const [languageCompiler, setLanguageCompiler] = useState(ljson());
  const [designFile, setDesignFile] = useState(null);

  const chooseProgLanguageLabelRef = useRef();
  const chooseProgLanguageOptionRef = useRef();
  const codeBlockLabelRef = useRef();
  const codeBlockOptionlRef = useRef();

  const diagramLabelRef = useRef();
  const diagramOptionRef = useRef();

  useEffect(() => {
    if (componentType == "code") {
      diagramLabelRef.current.classList.add("hidden");
      diagramOptionRef.current.classList.add("hidden");
      chooseProgLanguageLabelRef.current.classList.remove("hidden");
      chooseProgLanguageOptionRef.current.classList.remove("hidden");
      codeBlockLabelRef.current.classList.remove("hidden");
      codeBlockLabelRef.current.nextElementSibling.classList.remove("hidden");
      // codeBlockOptionlRef.current.classList.remove("hidden")
    } else {
      diagramLabelRef.current.classList.remove("hidden");
      diagramOptionRef.current.classList.remove("hidden");
      chooseProgLanguageLabelRef.current.classList.add("hidden");
      chooseProgLanguageOptionRef.current.classList.add("hidden");
      codeBlockLabelRef.current.classList.add("hidden");
      codeBlockLabelRef.current.nextElementSibling.classList.add("hidden");
      // codeBlockOptionlRef.current.classList.add("hidden")
    }
  }, [componentType]);

  const addComponent = async () => {
    try {
      await addDoc(collection(db, componentStorageName), {
        componentName: componentName,
        componentType: componentType,
        componentCategory: componentCategory,
        programmingLanguage: programmingLanguage,
        codeBlock: codeBlock,
        designData: designFile
      }).then(()=>{
        alert("Data saved successfully!")
      }).catch((e)=>{
        alert("Error while saving data.")
      })
    } catch (e) {
      alert("Unable to save the data. Please try again later.");
      console.log("Error found in saving: " + e);
    }
  };

  useEffect(() => {
    switch (programmingLanguage) {
      case "java":
        setLanguageCompiler(ljava());
        break;
      case "cpp":
        setLanguageCompiler(lcpp());
        break;
      case "js":
        setLanguageCompiler(ljs());
        break;
      case "php":
        setLanguageCompiler(lphp());
        break;
      case "css":
        setLanguageCompiler(lcss());
        break;
      case "html":
        setLanguageCompiler(lhtml());
        break;
      case "python":
        setLanguageCompiler(lpy());
        break;
      case "json":
        setLanguageCompiler(ljson());
        break;
      case "xml":
        setLanguageCompiler(lxml());
        break;
      case "swift":
        setLanguageCompiler(lswift());
        break;
      case "ruby":
        setLanguageCompiler(lruby());
        break;
      case "rust":
        setLanguageCompiler(lrust());
        break;
      default:
        setLanguageCompiler(ljson());
        break;
    }
  }, [programmingLanguage]);

  useEffect(() => {
    console.log(languageCompiler);
  }, []);
  return (
    <>
      <Header />
      <form className="add-component">
        <label>Component Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter a name for the component"
          value={componentName}
          onChange={(e) => {
            setComponentName(e.target.value.trim());
          }}
        />
        <label>Component Type</label>
        <select
          onChange={(e) => {
            setComponentType(e.target.value);
          }}
        >
          <option selected value="code">
            Code
          </option>
          <option value="design">Design</option>
        </select>
        <label>Component Category</label>
        <select
          onChange={(e) => {
            setComponentcategory(e.target.value);
          }}>
          <option selected hidden value="none">
            Select a category
          </option>
          <option value="views">Views</option>
          <option value="model">Model</option>
          <option value="controller">Controllers</option>
          <option value="class">Class</option>
          <option value="object">Object</option>
          <option value="data">Data Access Object</option>
          <option value="services">Services</option>
          <option value="plugins">Plugins</option>
          <option value="api">APIs</option>
          <option value="others">Others</option>
        </select>
        <label ref={chooseProgLanguageLabelRef}>Programming Language</label>
        <select
          onChange={(e) => {
            setProgrammingLanguage(e.target.value);
          }}
          ref={chooseProgLanguageOptionRef}
        >
          <option selected hidden value="none">
            Choose the code language
          </option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="xml">XML</option>
          <option value="swift">Swift</option>
          <option value="ruby">Ruby</option>
          <option value="rust">Rust</option>
          <option value="json">JSON</option>
          <option value="others">Others</option>
        </select>
        <label ref={diagramLabelRef}>Upload Component Design</label>
        <input
          ref={diagramOptionRef}
          name="design"
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              var reader = new FileReader();
              reader.onloadend = function () {
                console.log('RESULT', reader.result)
                setDesignFile(reader.result);
              };
              reader.readAsDataURL(e.target.files[0]);
            } else {
              setDesignFile(null);
            }
          }}
        />
        <label ref={codeBlockLabelRef}>Code Block</label>
        <ReactCodeMirror
          value={codeBlock}
          ref={codeBlockOptionlRef}
          onChange={(e) => {
            setCodeBlock(e);
          }}
          placeholder={"/* Write your code here */"}
          minHeight="200px"
          extensions={[languageCompiler]}
        />
        <label></label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (componentName == "") {
              alert("Please enter a component name");
            } else if (componentCategory == "none") {
              alert("Please select a category");
            } else if (
              componentType == "code" &&
              programmingLanguage == "none"
            ) {
              alert("Please Choose the Programming Language");
            } else if (componentType == "code" && codeBlock == "") {
              alert("Please Enter the code block");
            } else if (componentType == "design" && designFile == null) {
              alert("Please upload the design");
            } else {
              addComponent();
            }
          }}
        >
          Save Component
        </button>
      </form>
    </>
  );
};

export default AddComponent;
