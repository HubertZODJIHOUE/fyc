import React, { useState } from 'react';


const App = () => {
    const [activeApp, setActiveApp] = useState('');

    return (
        <div>
            {/* Barre de navigation */}
            <nav style={navStyle}>
                <div style={navContainerStyle}>
                    <h1 style={logoStyle}>FYC Microfrontend</h1>
                    <ul style={navListStyle}>
                        <li style={navItemStyle}>
                            <button
                                style={{
                                    ...buttonStyle,
                                    ...(activeApp === 'app1' ? activeButtonStyle : {}),
                                }}
                                onClick={() => setActiveApp('app1')}
                            >
                                FYC APP 1
                            </button>
                        </li>
                        <li style={navItemStyle}>
                            <button
                                style={{
                                    ...buttonStyle,
                                    ...(activeApp === 'app2' ? activeButtonStyle : {}),
                                }}
                                onClick={() => setActiveApp('app2')}
                            >
                                FYC APP 2
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Corps principal */}
            <div style={mainStyle}>
                {activeApp === '' && (
                    <h1 style={welcomeTextStyle}>Bienvenue dans le Shell FYC</h1>
                )}
                {activeApp === 'app1' && (
                    <h1 style={welcomeTextStyle}>Bienvenue dans le cours FYC APP 1</h1>
                )}
                {activeApp === 'app2' && (
                    <h1 style={welcomeTextStyle}>Bienvenue dans le cours FYC APP 2</h1>
                )}
            </div>
        </div>
    );
};

export default App;

// Styles en ligne
const navStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    margin: '0 auto',
};

const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
};

const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
};

const navItemStyle = {
    marginLeft: '1rem',
};

const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
};

const activeButtonStyle = {
    backgroundColor: 'white',
    color: '#007BFF',
    fontWeight: 'bold',
};

const mainStyle = {
    padding: '2rem',
    textAlign: 'center',
};

const welcomeTextStyle = {
    fontSize: '2rem',
    color: '#333',
};
