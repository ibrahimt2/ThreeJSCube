function CommandRow ({command}) {
    return (
        <tr>
            <td>{command.name}</td>
            <td>{command.x}</td>
            <td>{command.y}</td>
            <td>{command.z}</td>
        </tr>
    )
}

export default CommandRow