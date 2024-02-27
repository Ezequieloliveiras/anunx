import { useSession } from "next-auth/react"

export default function UseInfo() {

    const { data: session } = useSession()

    return (
        <div
            style={{
                display: 'flex',
                marginLeft: '10px'
            }}>
            <div>
                <span className="font-bold">{session?.user.name}</span>
            </div>
        </div>
    )
}