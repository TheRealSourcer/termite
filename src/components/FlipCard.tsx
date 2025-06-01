import { useState } from "react";

export default function FlipCard({ front, back }: {front: string, back: string }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div onClick={() => setFlipped(!flipped)} className=" px-14 py-8 bg-white text-black">
            {flipped ? back : front}
        </div>
    )
}