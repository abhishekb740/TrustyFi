type Props = {
    params: {
        protocol: string;
    }
}

export default function Protocol ({params} : Props) {
    console.log(params.protocol);
    return (
        <div>
            <h1>Protocol</h1>
        </div>
    )
}