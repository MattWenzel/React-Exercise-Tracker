import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreatePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight]     = useState('');
    const [unit, setUnit]         = useState('');
    const [date, setDate]         = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add an Exercise</h2>
            <p>Update your daily regimen with a new exercise.</p>
            <br></br>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <br></br>
                    <br></br>
                    
                    <input
                        type="text"
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    
                    <input
                        type="number"
                        value={reps}
                        placeholder="Number of Reps"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    
                    <input
                        type="number"
                        placeholder="weight"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    
                    <select name="unit" onChange={e => setUnit(e.target.value)}>
                        <option value="" selected={"selected"} disabled hidden>Unit</option>
                        <option value="lbs" >lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                        <option value="kilometers">kilometers</option>
                    </select>

                    
                    <input
                        type="date"
                        value={date}
                        placeholder="date"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add to the collection</button> </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;