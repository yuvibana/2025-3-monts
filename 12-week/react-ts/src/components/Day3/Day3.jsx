import React, { useCallback, useState } from 'react'


const localeStorageService = {
    add: (student) => {
        const exiting = localStorage.getItem('students');
        const students = exiting ? JSON.parse(exiting) : [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    },
    getAll: () => {
        const existing = localStorage.getItem('students');
        return existing ? JSON.parse(existing) : [];
    }
}


const handleSubmit = () => {
    const [student, setStudent] = useState({
        id: 0,
        name: "",
        age: 0,
        grade: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setStudent((prev) => ({
            ...prev, [id]: value
        }));
    };

    const clearStudent = () => {
        setStudent({ id: 0, name: "", age: 0, grade: '' });
    };

    const validate = () => {
        return student.name.trim() !== '' && student.age > 0;
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            alert("Please fill in all fields correctly");
            return;
        }
        localeStorageService.add(student);
        clearStudent();
    };

    return { formSubmit, handleChange, student };
};

const StudentsForm = () => {
    const { student, handleChange, formSubmit, } = handleSubmit()
    return (
        <form onSubmit={formSubmit}>
            <div style={{ marginBottom: "15px" }}>
                <label>Name:</label>
                <input
                    id="name"
                    type="text"
                    value={student.name}
                    onChange={handleChange}
                    placeholder="Enter student name"
                    style={{ width: "100%", padding: "10px" }}
                />
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label>Age:</label>
                <input
                    id="age"
                    type="number"
                    value={student.age}
                    onChange={handleChange}
                    placeholder="Enter student age"
                    style={{ width: "100%", padding: "10px" }}
                />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label>Grade:</label>
                <input
                    id="grade"
                    type="text"
                    value={student.grade}
                    onChange={handleChange}
                    placeholder="Enter student grade"
                    style={{ width: "100%", padding: "10px" }}
                />
            </div>

            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                }}
            >
                Add Student
            </button>
        </form>
    );
};


function FindStudents() {
    const studentList = localeStorageService.getAll();
    const [searchTerm, setSearchTerm] = useState("");
    const [stds, setStds] = useState(studentList);

    function handleChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        const filteredStd = studentList.filter((std) =>
            std.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setStds(filteredStd);
    }


    function Render() {
        return (
            <input
                type="text"
                placeholder="Find by name"
                value={searchTerm}
                onChange={handleChange}
                style={{ width: "90%", padding: "10px", marginBottom: "20px" }}
            />
        );
    }

    return { Render, stds };
}


const StudentsTable = () => {
    const { Render, stds } = FindStudents();
    return (
        <div
            style={{
                padding: "10px",
                marginTop: "50px",
                textAlign: "left",
                border: "1px solid #ddd",
            }}
        >
            <Render />
            {
                stds.length > 0 &&
                <div

                >
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                            border: "1px solid #ddd",
                        }}
                    >
                        <span
                            style={{
                                borderRight: "1px solid #ddd",
                                padding: "10px",
                                display: "block",
                                minWidth: "50px",
                            }}
                        >
                            S.No.
                        </span>
                        <span>Name</span>
                    </div>
                    {stds.map((item, key) => (
                        <RenderList key={key} item={item} index={key} />
                    ))}
                </div>
            }
        </div>
    )
}


function RenderList({ item, index }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid #ddd",
            }}
        >
            <span
                style={{
                    borderRight: "1px solid #ddd",
                    padding: "10px",
                    display: "block",
                    minWidth: "50px",
                }}
            >
                {index + 1}.
            </span>
            <span>{item.name}</span>
        </div>
    );
}





export default function Day3() {
    return (
        <div>
            <StudentsForm />
            <StudentsTable />
        </div>
    )
}
