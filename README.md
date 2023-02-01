# The Cube Command Center

Live at: https://thecubecommand.netlify.app/

## Set up instructions 
In the command line of a folder, enter the following commands one by one
```
git clone https://github.com/ibrahimt2/ThreeJSCube.git
npm i
npm start 
```

Then, visit the local host URL that is provided in your command line terminal. Most likely, this will be localhost:3000

## Scene description

The scene consists of a white cube and 3 colored lines. The colored lines represent the x, y, and z axis. 

There are 3 lights (red, blue and green) pointed at the intitial position of the cube, helping to distinguish each face of the cube. 

## Command Description

### MOVE TO
Description: Sets the cube's position to the given coordinates. 
#### Example
```
Initial position = [0,0,0]
MOVE TO [5,5,5]
Final position = [5,5,5]
```


### MOVE BY 
Description: Changes the cube's position by the given values
#### Example
```
Initial position = [0,0,0]
MOVE BY [1,1,1]
MOVE BY [1,1,1]
Final position = [2,2,2]
```

### ROTATE TO 
Description: Sets the cube's rotation to the given values (in degrees).
#### Example
```
Initial rotation = [0,0,0]
ROTATE TO [30,30,30]
Final rotation = [30,30,30]
```

### ROTATE BY
Description: Changes the cube's rotation by the given values (in degrees).
#### Example
```
Initial rotation = [0,0,0]
ROTATE BY [30,30,30]
ROTATE BY [30,30,30]
Final rotation = [60,60,60]
```