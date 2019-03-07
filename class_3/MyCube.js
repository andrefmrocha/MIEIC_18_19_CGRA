class MyCube extends CGFobject {
    constructor(scene){
        super(scene);
        this.initBuffers();
    }

    initBuffers(){
        this.vertices = [
            -0.5, -0.5, -0.5, // 0
            -0.5, -0.5, 0.5, // 1
            -0.5, 0.5, 0.5, // 2
            0.5, 0.5, 0.5, // 3
            0.5, -0.5, 0.5, // 4
            0.5, -0.5, -0.5, // 5
            0.5, 0.5, -0.5, // 6
            -0.5, 0.5, -0.5, // 7
        ]
        this.indices = [
            2, 1, 4, 
            4, 3, 2, 
            4, 6, 3,
            4, 5, 6, 
            1, 2, 7,
            7, 0, 1,
            2, 3, 7,
            3, 6, 7,
            5, 4, 1,
            0, 5, 1, 
            5, 7, 6,
            0, 7, 5
        ]
        

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}