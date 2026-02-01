const { useState, useRef } = React;

function App() {
    const [showCongrats, setShowCongrats] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: 50, left: 50 });
    const noButtonRef = useRef(null);

    const handleYesClick = () => {
        setShowCongrats(true);
    };

    const handleNoMouseEnter = (e) => {
        const button = noButtonRef.current;
        if (!button) return;

        // Get viewport dimensions
        const maxX = window.innerWidth - 120;
        const maxY = window.innerHeight - 60;

        // Generate random position
        const newTop = Math.random() * maxY;
        const newLeft = Math.random() * maxX;

        setNoButtonPosition({ top: newTop, left: newLeft });
    };

    if (showCongrats) {
        return (
            <div style={styles.congratsContainer}>
                <h1 style={styles.congratsText}>🎉 Congratulations for the first project! 🎉</h1>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.question}>Is this my first project?</h1>
            <div style={styles.buttonContainer}>
                <button 
                    style={styles.yesButton}
                    onClick={handleYesClick}
                >
                    Yes
                </button>
                <button 
                    ref={noButtonRef}
                    style={{
                        ...styles.noButton,
                        position: 'absolute',
                        top: `${noButtonPosition.top}px`,
                        left: `${noButtonPosition.left}px`
                    }}
                    onMouseEnter={handleNoMouseEnter}
                >
                    No
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f8ff',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden'
    },
    question: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '50px',
        textAlign: 'center',
        padding: '0 20px'
    },
    buttonContainer: {
        position: 'relative',
        width: '100%',
        height: '400px'
    },
    yesButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) translateX(-80px)',
        padding: '15px 40px',
        fontSize: '1.2rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        fontWeight: 'bold'
    },
    noButton: {
        padding: '15px 40px',
        fontSize: '1.2rem',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        fontWeight: 'bold'
    },
    congratsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff3cd',
        fontFamily: 'Arial, sans-serif'
    },
    congratsText: {
        fontSize: '3rem',
        color: '#856404',
        textAlign: 'center',
        padding: '20px',
        animation: 'bounce 1s infinite'
    }
};

// Add bounce animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    button:hover {
        filter: brightness(1.1);
    }
`;
document.head.appendChild(styleSheet);

ReactDOM.render(<App />, document.getElementById('root'));
