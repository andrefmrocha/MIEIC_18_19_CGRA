class MyTriangle extends CGFobject{
    constructor(scene){
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices=[
            1, 0, 0,
            0, -1, 0,
            0, 1, 0
        ];

        this.indices = [
            0, 2, 1
        ];

        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}