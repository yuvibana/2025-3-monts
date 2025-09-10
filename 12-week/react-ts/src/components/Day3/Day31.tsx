import React, { useEffect, useId, useState } from "react";

// ---------- Interfaces ----------
interface IStudent {
    readonly id: number | string;
    name: string;
    age: number;
    grade?: string;
}

interface IStudentService {
    add(student: IStudent): void;
    getAll(): IStudent[];
}

class LocalStorageStudentService implements IStudentService {
    private key = "students";
    add(student: IStudent): void {
        const existing = localStorage.getItem(this.key);
        const students = existing ? JSON.parse(existing) : [];
        students.push(student);
        localStorage.setItem(this.key, JSON.stringify(students));
    }

    getAll(): IStudent[] {
        const existing = localStorage.getItem(this.key);
        return existing ? JSON.parse(existing) : [];
    }
}

// ---------- Student Form Hook ----------
function useStudentForm(service: IStudentService, onStudentAdded: () => void) {
    const [student, setStudent] = useState<IStudent>({
        id: 0,
        name: "",
        age: 0,
        grade: "",
    });
    const Id = useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [id]: id === "age" ? Number(value) : value,
        }));
    };

    const validate = () => student.name.trim() !== "" && student.age > 0;

    const clearStudent = () => {
        setStudent({ id: 0, name: "", age: 0, grade: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            alert("Please fill in all fields correctly");
            return;
        }
        service.add({ ...student, id: Id });
        clearStudent();
        onStudentAdded(); // 🔥 refresh table
    };

    return { student, handleChange, handleSubmit };
}

// ---------- Student Form Component ----------
interface StudentsFormProps {
    student: IStudent;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const StudentsForm: React.FC<StudentsFormProps> = ({
    student,
    handleChange,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
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

// ---------- Add Student Wrapper ----------
const AddStudent: React.FC<{ onStudentAdded: () => void }> = ({
    onStudentAdded,
}) => {
    const studentService = new LocalStorageStudentService();
    const { student, handleChange, handleSubmit } = useStudentForm(
        studentService,
        onStudentAdded
    );

    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Add a Student</h2>
            <StudentsForm
                student={student}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

// ---------- Students Table ----------
const StudentsTable: React.FC<{ service: IStudentService; refresh: number }> = ({
    service,
    refresh,
}) => {
    const [stdList, setStdList] = useState<IStudent[]>([]);

    useEffect(() => {
        setStdList(service.getAll());
    }, [refresh]); // 🔥 refresh table when student added

    return (
        <div
            style={{
                padding: "10px",
                marginTop: "50px",
                textAlign: "left",
                border: "1px solid #ddd",
            }}
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
            {stdList.map((item, index) => (
                <div
                    key={item.id}
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
            ))}
        </div>
    );
};

// ---------- Main Component ----------
export default function Day3() {
    const [refresh, setRefresh] = useState(0);
    const studentService = new LocalStorageStudentService();

    const handleStudentAdded = () => {
        setRefresh((prev) => prev + 1); // trigger re-render
    };

    return (
        <>
            <h3 style={{ color: "rgb(24, 94, 170)", fontStyle: "italic" }}>
                # Day Three: Interfaces & Objects in TypeScript
            </h3>
            <AddStudent onStudentAdded={handleStudentAdded} />
            <StudentsTable service={studentService} refresh={refresh} />
        </>
    );
}
