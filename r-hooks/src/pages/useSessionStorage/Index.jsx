import React, { useEffect, useState } from 'react'

// Scenario: You’re building a checkout form. If the user refreshes the page, you don’t want them to lose their input. But you don’t need it saved forever → so sessionStorage is perfect.

const useSessionStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const saved = sessionStorage.getItem(key);
        try {
            return saved ? JSON.parse(saved) : initialValue;
        } catch (e) {
            return initialValue;
        }
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default function Index() {
    const [formData, setFormData] = useSessionStorage("checkout-form", {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "250px" }}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
                <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                />
                <input
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="ZIP Code"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}





