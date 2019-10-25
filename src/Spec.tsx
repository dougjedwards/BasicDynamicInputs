
import React from 'react';


export interface ISpecItem{
    key: string;
    title:string;
    value: string;
    isValid?:boolean;
}

interface ISpecProps{
    specItem: ISpecItem;
    onItemChanged:(specItem:ISpecItem)=>void;
    onItemRemoved:(key:string)=>void;
}

const Spec = (props:ISpecProps) =>{


    const onChange=(value?:string, title?:string)=>{
        if(value!=null){
            props.onItemChanged({title: props.specItem.title, value:value, key:props.specItem.key});
        }else if(title!=null){
            props.onItemChanged({title: title, value:props.specItem.value, key:props.specItem.key});
        }
    }

    return(
        <div>
            <input 
                value ={props.specItem.title} 
                onChange={(e)=> onChange(undefined,e.currentTarget.value)
            }/>
            <input 
                value={props.specItem.value}  
                onChange={(e)=> onChange( e.currentTarget.value, undefined)}/>
            <button onClick={()=>props.onItemRemoved(props.specItem.key)}>Delete</button>
        </div>
    )
}

export default Spec;