import { useMemo } from "react";

interface Props {
    numbers: number[];
}

const Memoize = ({ numbers }: Props) => {

    const sum = useMemo(
        () => numbers.reduce((prev, next) => prev + next, 0)
    ,[numbers])

    // const sum = numbers.reduce((prev, next) => prev + next, 0)

    return (
        <div>
            <h1>Sum of numbers</h1>
            <p>Sum: {sum}</p>
        </div>
    )
}

export default Memoize