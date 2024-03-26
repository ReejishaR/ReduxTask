import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editTable } from "../redux/table/TableSlice";
import "../assets/style/style.css";
import { useParams, useNavigate } from "react-router-dom";

function EditTable() {
    const { id } = useParams(); 
    const users = useSelector((state) => state.table.users);
    const existingUser = users.find(user => user.id === parseInt(id));
    const [name, setName] = useState( existingUser.name);
    const [email, setEmail] = useState(existingUser.email);
    const [phone, setPhone] = useState(existingUser.phone);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(editTable({
            id: parseInt(id), 
            name,
            email,
            phone
        }));
        navigate("/");
    };

    return (
        <div>
            <div>
                <h2>Edit user</h2>
            </div>
            <form onSubmit={handleUpdate}>
                <label>Name</label>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Phone</label>
                <input type="number" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit" className="add-button">Edit</button>
            </form>
        </div>
    );
};

export default EditTable;
