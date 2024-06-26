import React from 'react';

function Item(props) {
    if(props.isDone){
        return (
            <div className='flex flex-wrap bg-purple-500 rounded-e-xl shadow-md shadow-light items-center border-dashed border-green-300 border-2 m-3'>
            <li className='p-2 m-1 overflow-auto uppercase rounded-e-lg ' key={props.index}>{props.value}✅</li>
           </div>   
        )
    }
    return (
        <div className='flex flex-wrap bg-purple-500 rounded-e-xl shadow-md shadow-light items-center border-dashed border-black border-2 m-3'>
         <li className='p-2 m-1 overflow-auto uppercase rounded-e-lg ' key={props.index}>{props.value}</li>
         <button onClick={()=>props.done(props.index)}>DONE✅</button>
         <button onClick={()=>props.delete(props.index)}>DELETE❌</button>
         <button onClick={()=>props.up(props.index)}>UP👆</button>
         <button onClick={()=>props.down(props.index)}>DOWN👇</button>
        </div>
       
    );
}

export default Item;