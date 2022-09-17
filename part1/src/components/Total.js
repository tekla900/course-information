const Total = ({ parts }) => {
    const sum = parts.map(each => each.exercises)
                .reduce((each, tot) => each + tot);
    return (
        <p>Number of exercises {sum}</p>
    )
}

export default Total