// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    
    constructor(properties) {
        this.length = properties.length; 
        this.width = properties.width; 
        this.height = properties.height; 
    }
    
    // volume of cuboid 
    volume() {
        return this.length * this.width * this.height; 
    }

    // surface area of cuboid 
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    }
}

class CubeMaker extends CuboidMaker {
    
    constructor(cubeProps) {
        super(cubeProps);
    }

    // formula: side ^ 3 
    cubeVolume() {
        return Math.pow(this.length, 3);
    }

    // formula: 6 * side ^ 2 
    cubeSurfaceArea() {
        return 6 * Math.pow(this.length, 2); 
    }
}
  
const cuboid = new CuboidMaker({
length: 4,
width: 5, 
height: 5, 
}); 

const cuby = new CubeMaker({
    length: 3,
    width: 3, 
    height: 3, 
}); 
    
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cuby.volume()); // 27 (testing inheritance)

console.log(cuby.cubeVolume()); // 27 
console.log(cuby.cubeSurfaceArea()); // 54 