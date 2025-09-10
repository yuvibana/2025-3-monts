import { useState } from "react"

export default function useNetwork(endpoint: string) {

    const [data, setData] = useState<any>([])

    const giveData = async () => {
        try {
            const r = await fetch(endpoint);
            
        } catch {

        }
    }

    return (
        <div>useNetwork</div>
    )
}
