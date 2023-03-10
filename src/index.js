import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


// handles input 
// handles the submit
function AddNewPerson(props){

    const [person, setPerson] = useState('')

    function handlesubmit(e){
        // this is the only part in this component that mentions props....
        //this means whenever this com....
        //supply person to props.handlesubmit
        props.handlesubmit(person)


        // manage the click
        // it should not go next page after clicking
        e.preventDefault()

    }
    function handleChange(e){
        setPerson(e.target.value)
    }

    return <div>

        <form>
            <input type="text"
          placeholder="Enter the person"
          onChange={handleChange}
          value={person} />

            <button onClick={handlesubmit}> Add New Contact </button>
        </form>



           </div>


}

function ListContact(props){
    const arr = props.data;
    const listItems = arr.map((val, key) => <li key={key}> {val} </li> );
    return <ul>{listItems}</ul>;
    //const listItems = arr.map((v, k) => <li key={key}>{val}</li>);
}



function ContactManager(props){
    const [contact, setContact] = useState(props.data);

    function addperson(name){
        setContact([...contact, name])
    }
// so basically that was the only place where we called the addperson
// after calling the addperson, we instruct it to pick it input from handlesubmit of addnewperson
// the handle submit of the addnewperson was created and informed that it will be passing updater person
// to the props.handleSubmit 
//console.log(contact)
   return <div>
   <ListContact  data={contact}/>
   <AddNewPerson handlesubmit={addperson}/>

    </div>


}

const names = ["Bolu", "Gbenga", "Ademola", "Tolulope"];

const me = <ContactManager data={names} />;

ReactDOM.render(me , document.getElementById("root") )