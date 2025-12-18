import { useNavigate } from 'react-router-dom';

export default function AccountPage() {
    const navigate = useNavigate();

    //This is the user info, we get this in login.
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div style={styles.container}>
        <div style={styles.card}>
            <h1 style={styles.title}>Account</h1>

            <div style={styles.infoRow}>
            <span style={styles.label}>Username:</span>
            <span style={styles.value}>{user.username}</span>
            </div>

            <div style={styles.infoRow}>
            <span style={styles.label}>Email:</span>
            <span style={styles.value}>{user.email}</span>
            </div>
            <button onClick={() => navigate('/')}>
            Back to Main Page
            </button>
            <button onClick={() => navigate('/library')}>
            Game Library
            </button>
        </div>
        </div>
    );
    }

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Courier New",
        color: "chartreuse",
    },
    card: {
  
        padding: "2rem",
        borderRadius: "12px",
        width: "350px",
      
    },
    title: {
        marginBottom: "1.5rem",
        textAlign: "center",
    },
    infoRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
    },
    label: {
        color: "chartreuse",
    },
    value: {
        fontWeight: "bold",
    },
    button: {
        marginTop: "2rem",
        width: "100%",
        padding: "0.8rem",
        borderRadius: "8px",
        border: "none",
        color: "chartreusee",
        fontSize: "1rem",
        cursor: "pointer",
    },
};
