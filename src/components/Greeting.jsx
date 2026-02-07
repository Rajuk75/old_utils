function Greeting({ name, role, skill, onViewProfile }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p>
        {
            Array.isArray() ? 
            (
            <>
                <strong>Skills:</strong> <p>{skill}</p>
            </>
            ) : 
            (
            <>
                <strong>Experience:</strong> {skill}
            </>
            )
        }
      </p>
      {onViewProfile && (
        <button onClick={onViewProfile} style={styles.button}>
          View Profile
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "10px",
    margin: "10px",
    width: "260px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Greeting;
