class MyTriangleBig extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [
            -2, 0, 0,
            2, 0, 0,
            0, 2, 0
        ];

        this.indices = [
            0, 1, 2
        ];
        this.normals = [];
        for(var i = 0; i < 3 ; i++){
          this.normals.push(0,0,1);
        }

        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();


    }
}
