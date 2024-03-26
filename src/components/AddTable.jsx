import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTable } from "../redux/table/TableSlice";
import { useNavigate } from "react-router-dom";

export const AddTable = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    const usersAmount = useSelector((state) => state.table.users.length);
    const navigate = useNavigate();
    
    const handleAdd = (event) => {
        event.preventDefault();
        dispatch(addTable({ id: usersAmount + 1, name, email, phone }));
        navigate('/');
    };

    
   
    return (
        <div>
            <div>
                <h2>Add new user</h2>
            </div>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Phone</label>
                <input type="number" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button onClick={handleAdd} type="submit">Add</button>
            </form>
        </div>
    );
};
