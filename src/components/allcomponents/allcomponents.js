import React, { useEffect, useState } from "react";
import "./allcomponents.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { componentStorageName, db } from "../../firebase";

const AllComponents = () => {
  const Card = (props) => {
    return (
      <div className="card">
        {props.type=="design"&&<img src={props.designFile} />}
        <span className="name">{props.name}</span>
        <span className="category">Category: {props.category}</span>
        {props.type == "code" && <span className="category">Language: {props.language}</span>}
        <div className="pills">
          <span>{props.type}</span>
        </div>
      </div>
    );
  };

  const [savedComponents, setSavedComponents] = useState([]);
  const fetchComponents = async () => {
    await getDocs(collection(db, componentStorageName)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSavedComponents(newData);
        console.log(newData);
      }
    );
  };

  useEffect(() => {
    fetchComponents();
  }, []);
  return <div className="all-components">
    {
        savedComponents.map((item)=>{
            return <Card name={item.componentName} category={item.componentCategory} language={item.programmingLanguage} type={item.componentType} designFile={item.designData} key={item.id} />
        })
    }
  
  </div>;
};

export default AllComponents;
