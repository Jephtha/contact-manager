import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <AddPersonForm />
//     <PeopleList />
//   </Provider>,
//   document.getElementById('root')
// );

// function AddPersonForm(props) {
//   const [ person, setPerson ] = useState('');
    
//   function handleChange(e) {
//     setPerson(e.target.value);
//   }
    
//   function handleSubmit(e) {
//     if(person !== '') {
//       props.handleSubmit(person);
//       setPerson('');
//     }
//     e.preventDefault();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" 
//         placeholder="Add new contact" 
//         onChange={handleChange} 
//         value={person} />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function PeopleList(props) {
//   const arr = props.data;
//   const listItems = arr.map((val, index) =>
//     <li key={index}>{val}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data);

//   function addPerson(name) {
//     setContacts([...contacts, name]);
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />
//       <PeopleList data={contacts} />
//     </div>
//   );
// }
// const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ContactManager data={contacts} />
// );

