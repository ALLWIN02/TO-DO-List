import React,{useState}from 'react';

const TodoList=()=>{
	const[todos,setTodos]=useState([]);
	const[input,setInput]=useState("");

	const addTodo= () =>{
		if(input){
			setTodo([...todos,input]);
			setInput("");
		}
	}
}