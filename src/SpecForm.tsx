import React from 'react';
import Spec, { ISpecItem } from './Spec';

// spec object, title value
interface ISpecFormProps{
    onSubmit: (specItems:ISpecItem[])=>void;
}

interface ISpecFormState{
    title: string;
    specs: ISpecItem[];
}

class SpecForm extends React.Component<ISpecFormProps,ISpecFormState>{

public state: ISpecFormState = {title: "", specs:[]};

public constructor(props:ISpecFormProps){
    super(props);
    this.state = {title:"", specs:[{key: new Date().toISOString(), title:"", value:""}]}
}

onSpecItemChanged(specItem:ISpecItem){
    // spread operator to create "new array" not referenced to state.
   let items = [...this.state.specs];
   let pos = -1;
   items.forEach((item, idx)=>{
       if(item.key === specItem.key){
           pos = idx;
       }
   });

   if(pos!== -1){
    items[pos] = specItem;
    this.setState({specs: items})
   }
}

onSpecItemAdded(specItem:ISpecItem){
    this.setState({specs: [...this.state.specs, specItem]});
}

onSpecItemDeleted(key:string){
    let items = [...this.state.specs];
    items = items.filter(item=>item.key!== key);
    this.setState({specs: items});
}

onSubmit(){
    
}

    renderSpecItems(specs: ISpecItem[]){
        return specs.map((spec, idx)=>{
            return(
                <div key={idx}>
                <Spec 
                onItemRemoved={(key)=>this.onSpecItemDeleted(key)}
                onItemChanged={(specItem:ISpecItem)=>this.onSpecItemChanged(specItem)} 
                specItem={{title:spec.title, value:spec.value, key: spec.key}}  
                />
                </div>
                );
          });
    }

    render(){
        return(
            <div>
            {this.renderSpecItems(this.state.specs)}
            <button  disabled={this.state.specs.length === 5} onClick={()=>{this.onSpecItemAdded({key: new Date().toISOString(), title:"",value:""})}}>Add</button>
                <button onClick={()=>{this.props.onSubmit(this.state.specs)}}>Submit</button>
            </div>
        )
    }
}

export default SpecForm;
