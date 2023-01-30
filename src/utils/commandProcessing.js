function computeCommandListResult(position, rotation, commandArray) {
    

    positionResult = position
    rotationResult = rotation

    while(commandArray.length != 0) {
        command = commandArray.shift()

        if(command.name == 'MOVE TO') {
            positionResult = [command.x, command.y, command.z]
        } else if(command.name == 'ROTATE TO') {
            rotationResult = [command.x, command.y, command.z]
        } else if(command.name == 'MOVE BY') {
            positionResult = [positionResult[0] + command.x, positionResult[1] + command.y, positionResult[2] + command.z]
        } else if(command.name == 'ROTATE BY') {
            rotationResult = [rotationResult[0] + command.x, rotationResult[1] + command.y, rotationResult[2] + command.z]
        }
    }

    return [positionResult, rotationResult]
}