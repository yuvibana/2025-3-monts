import React, { useState } from 'react';

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

type FprmShape = Circle | Square | Rectangle;

function calculateArea(shape: FprmShape): number {
    if (!shape) {
        throw new Error('Shape is not defined!');
    }

    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            throw new Error('Unknown shape');
    }
}


const Day4: React.FC = () => {
    const [shape, setShape] = useState<'circle' | 'square' | 'rectangle' | null>(null);
    const [formdata, setFormdata] = useState<{ [key: string]: any }>({});
    const [result, setResult] = useState<number | null>(null);

    const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedShape = e.target.value as 'circle' | 'square' | 'rectangle';
        setShape(selectedShape);

        // Set formdata based on selected shape
        if (selectedShape === 'circle') {
            setFormdata({ kind: 'circle', radius: 0 });
        } else if (selectedShape === 'square') {
            setFormdata({ kind: 'square', sideLength: 0 });
        } else if (selectedShape === 'rectangle') {
            setFormdata({ kind: 'rectangle', width: 0, height: 0 });
        }
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newValue = parseFloat(value);

        if (formdata) {
            setFormdata({
                ...formdata,
                [name]: newValue,
            });
        }
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!shape || !formdata) {
            alert('Please select a shape and fill out the fields!');
            return;
        }

        const area = calculateArea(formdata);
        setResult(area);
    };


    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shape Area Calculator</h2>

            {/* Shape Selector */}
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Select Shape:</label>
                <select
                    value={shape || ''}
                    onChange={handleShapeChange}
                    style={{ width: '100%', padding: '10px' }}
                >
                    <option value="">Select...</option>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                </select>
            </div>

            {/* Input Field for Shape */}
            {shape === 'circle' && formdata && (
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Radius:</label>
                    <input
                        type="number"
                        name="radius"
                        value={formdata.radius || ''}
                        onChange={handleValueChange}
                        placeholder="Enter radius"
                        style={{ width: '100%', padding: '10px' }}
                    />
                </div>
            )}

            {shape === 'square' && formdata && (
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Side Length:</label>
                    <input
                        type="number"
                        name="sideLength"
                        value={formdata.sideLength || ''}
                        onChange={handleValueChange}
                        placeholder="Enter side length"
                        style={{ width: '100%', padding: '10px' }}
                    />
                </div>
            )}

            {shape === 'rectangle' && formdata && (
                <div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Width:</label>
                        <input
                            type="number"
                            name="width"
                            value={formdata.width || ''}
                            onChange={handleValueChange}
                            placeholder="Enter width"
                            style={{ width: '100%', padding: '10px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Height:</label>
                        <input
                            type="number"
                            name="height"
                            value={formdata.height || ''}
                            onChange={handleValueChange}
                            placeholder="Enter height"
                            style={{ width: '100%', padding: '10px' }}
                        />
                    </div>
                </div>
            )}

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Calculate Area
                </button>
            </div>

            {/* Result */}
            {result !== null && (
                <p
                    style={{
                        marginTop: '20px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Area: {result}
                </p>
            )}
        </form>
    );
};

export default Day4;
