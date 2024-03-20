import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        language: 'C++',
        stdin: '',
        sourceCode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/submit', formData);
            alert('Form submitted successfully');
            setFormData({
            username: '',
        language: '',
        stdin: '',
        sourceCode: ''
            })
            navigate("/display");
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again later.');
        }
    };

    return (
        <div 
        style={{ maxWidth: '600px', marginLeft: '34vw', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',  }}
        >
        <form onSubmit={handleSubmit}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
            </label><br />
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Preferred Code Language:
                <select name="language"  onChange={handleChange} required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                </select>
            </label><br />
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Standard Input (stdin):
                <textarea name="stdin" value={formData.stdin} onChange={handleChange} rows="4" cols="50" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', resize: 'vertical' }} />
            </label><br />
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Source Code:
                <textarea name="sourceCode" value={formData.sourceCode} onChange={handleChange} rows="10" cols="50" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', resize: 'vertical' }} />
            </label><br />
            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', marginTop: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Submit</button>
        </form>
    </div>
    );
};

export default Form;
