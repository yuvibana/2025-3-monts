import React, { useState } from "react";

const BmiCalculator = () => {
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>();
    const [bmi, setBmi] = useState<string | null>(null);

    const calculateBMI = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        if (!weight || !height) return;

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
    };

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.title}>BMI Calculator</h2>
            <form onSubmit={calculateBMI}>
                <div style={styles.inputGroup}>
                    <label htmlFor="weight" style={styles.label}>Weight (kg):</label>
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
                        placeholder="Enter your weight"
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="height" style={styles.label}>Height (cm):</label>
                    <input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)}
                        placeholder="Enter your height"
                        style={styles.input}
                    />
                </div>

                <button type="submit" style={styles.button}>Calculate BMI</button>

                {bmi && (
                    <div style={styles.result}>
                        <strong>Your BMI:</strong> {bmi}
                    </div>
                )}
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        border:"1px solid #ddd"
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333"
    },
    inputGroup: {
        marginBottom: "15px"
    },
    label: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        color: "#555"
    },
    input: {
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px"
    },
    button: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px"
    },
    result: {
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#e6ffe6",
        border: "1px solid #b2ffb2",
        borderRadius: "4px",
        color: "#333",
        textAlign: "center"
    }
};

export default BmiCalculator;
