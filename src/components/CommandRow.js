/** CommandRow.
 * 
 *  Takes in a command, displays a row for given command. 
 * 
 *  Rendered By: CommandRowContainer
 * 
 * @param {*} param0 
 * @returns 
 */

function CommandRow ({command}) {
    return (
        <tr>
            <td xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>{command.name}</td>
            <td xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>{command.x}</td>
            <td xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>{command.y}</td>
            <td xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>{command.z}</td>
        </tr>
    )
}

export default CommandRow