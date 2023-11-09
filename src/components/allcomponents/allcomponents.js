import React, { useEffect, useRef, useState } from "react";
import "./allcomponents.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { componentStorageName, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const AllComponents = () => {
  const loaderRef = useRef();
  const navigate = useNavigate();

  const Card = (props) => {
    return (
      <div className="card">
        <span className="edit-btn" onClick={(e)=>{
            e.preventDefault()
            navigate("/edit-component/"+props.compID)
        }}>
          <dotlottie-player
            src="/edit_ic.json"
            background="transparent"
            speed="1"
            style={{
              width: "30px",
              height: "30px",
            }}
            loop={false}
            onMouseOver={(e)=>{
                e.target.play();
                setTimeout(()=>{
                    e.target.stop();
                }, 2000);
            }}
          ></dotlottie-player>
        </span>
        <span className="del-btn" onClick={(e)=>{
            e.preventDefault()
            if (window.confirm("Do you want to delete this component?")){
                deleteComponent(props.compID)
            }
        }}>
          <dotlottie-player
            src="/delete_ic.json"
            background="transparent"
            speed="1"
            style={{
              width: "30px",
              height: "30px",
            }}
            loop={false}
            onMouseOver={(e)=>{
                e.target.play();
                setTimeout(()=>{
                    e.target.stop();
                }, 2000);
            }}
          ></dotlottie-player>
        </span>
        {props.type == "design" && <img src={props.designFile} />}
        <span className="name">{props.name}</span>
        <span className="category">Category: {props.category}</span>
        {props.type == "code" && (
          <span className="category">Language: {props.language}</span>
        )}
        <div className="pills">
          <span>{props.type}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    loaderRef.current.style.display = "flex";
  }, []);

  const deleteComponent = async (compID) => {
    console.log(compID);
    await deleteDoc(doc(db, componentStorageName, compID)).then(() => {
        setSavedComponents(savedComponents.filter((item)=>{return item.id != compID}))
        alert("Deleted Successfully!");
      })
  }

  const [savedComponents, setSavedComponents] = useState([]);
  const fetchComponents = async () => {
    await getDocs(collection(db, componentStorageName)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        loaderRef.current.style.display = "none";
        setSavedComponents(newData);
        console.log(newData);
      }
    );
  };

  useEffect(() => {
    fetchComponents();
  }, []);
  return (
    <>
    <dotlottie-player
        ref={loaderRef}
        src="/loading_anim.json"
        background="transparent"
        speed="1"
        style={{
          width: "300px",
          height: "300px",
          margin: "auto",
          display: "flex"
        }}
        loop
        autoplay
      ></dotlottie-player>
      <span className="title">All Components</span>
    <div className="all-components">
      {savedComponents.map((item) => {
        return (
          <Card
            name={item.componentName}
            category={item.componentCategory}
            language={item.programmingLanguage}
            type={item.componentType}
            designFile={item.designData}
            key={item.id}
            compID={item.id}
          />
        );
      })}
    </div>
    </>
  );
};

export default AllComponents;
