import React, { useState } from 'react';

// Main App component for the login form
const App = () => {
    // State hooks to manage form inputs and the message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    // Handles the form submission
    const handleSubmit = (event) => {
        // Prevents the default form submission behavior
        event.preventDefault();

        // Check if both fields are filled
        if (!username || !password) {
            setMessage('Both fields are mandatory.');
            setMessageType('error');
            return;
        }

        // Check the credentials
        if (username === 'user' && password === 'password') {
            // Set success message
            setMessage(`Welcome, ${username}!`);
            setMessageType('success');
        } else {
            // Set error message for invalid credentials
            setMessage('Invalid username or password');
            setMessageType('error');
        }
    };

    // --- Basic Inline Styles ---
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5',
        },
        formContainer: {
            padding: '2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: 'white',
            width: '300px',
            textAlign: 'center',
        },
        header: {
            marginBottom: '1.5rem',
            color: '#333',
        },
        inputGroup: {
            marginBottom: '1rem',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            color: '#555',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box', // Important for padding and width
        },
        button: {
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
        },
        message: {
            marginTop: '1rem',
            color: messageType === 'success' ? 'green' : 'red',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.header}>XLogin</h1>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div style={styles.inputGroup}>
                        <label htmlFor="username" style={styles.label}>
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="user"
                        />
                    </div>

                    {/* Password Field */}
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="password"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" style={styles.button}>
                            Submit
                        </button>
                    </div>
                </form>

                {/* Message Display Area */}
                {message && (
                    <p style={styles.message}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default App;

