import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
    const [colorList, setColorList] = useState([]);
    // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        console.log("Response from get bubbles request:");
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  },[]);   
    

    return (
      <>
<ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList}  />
      </>
    );
  };

export default BubblePage;




        // make a delete request to delete this color
  // axiosWithAuth()
  //   .delete(`/colors/${colors.id}`)
  //   .then(res => {
  //     console.log("Response from delete request: ", res);
  //   })  // end of the .then
  //   .catch(err => {
  //   console.log(err)
  //   })  // end of the .catch 