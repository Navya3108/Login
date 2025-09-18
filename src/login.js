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
    
    // Style object for messages for basic coloring without classes
    const messageStyle = {
        color: messageType === 'success' ? 'green' : 'red',
    };

    return (
        <div>
            <div>
                <h1>XLogin</h1>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                {/* Message Display Area */}
                {message && (
                    <p style={messageStyle}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default App;

