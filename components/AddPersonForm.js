import React, { useState} from 'react';
import { connect } from 'react-redux';

function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}

function AddPersonForm(props) {
    
}