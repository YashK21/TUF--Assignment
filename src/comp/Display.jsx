import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/display')
            .then(response => {
                setSubmissions(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div style={{ maxWidth: '800px',marginLeft: '32vw', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Submitted Code Snippets</h1>
            {
                submissions.length > 0 ?
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '18px', margin: 'auto' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '12px',  }}>Username</th>
                                <th style={{ border: '1px solid #ddd', padding: '12px',  }}>Code Language</th>
                                <th style={{ border: '1px solid #ddd', padding: '12px',  }}>Standard Input (stdin)</th>
                                <th style={{ border: '1px solid #ddd', padding: '12px',  }}>Timestamp</th>
                                <th style={{ border: '1px solid #ddd', padding: '12px',  }}>Source Code (First 100 characters)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                submissions.map(entry => (
                                    <tr key={entry.id}>
                                        <td style={{ border: '1px solid #ddd', padding: '12px' }}>{entry.username}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '12px' }}>{entry.language}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '12px' }}>{entry.stdin}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '12px' }}>{entry.timestamp}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '12px' }}>{entry.sourceCode.substring(0, 100)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : <p style={{ fontSize: '20px' }}>No Entries Found</p>
            }
            <button onClick={() => navigate("/form")} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', marginTop: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' }}>Go to form</button>
        </div>
    );
};

export default Display;
