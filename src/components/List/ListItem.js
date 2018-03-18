//With this component I can use the unique keys in the JSON object to generate the 'list'
import React from "react";
import "./List.css";
export const ListItem = props =>

<div className="row">
   		 {props.children} 	
 </div>;
