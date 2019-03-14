class MyParallelogram extends CGFobject{
  constructor(scene, coords) {
    super(scene);
    this.initBuffers();
    if (coords != undefined)
      this.updateTexCoords(coords);
  }

    initBuffers(){

        this.texCoords=[
          /*1,0,
          1,1,
          0,1,
          0,0,*/
          0,0,
          0,1,
          1,1,
          1,0
        ];

        this.vertices = [
          0, 0, 0,
          2, 0, 0,
          3, 1, 0,
          1, 1, 0,
          1, 1, 0,
          3, 1, 0,
          2, 0, 0,
          0, 0, 0
        ];

        this.indices = [
            0, 1, 3,
            1, 2, 3,
            3, 1, 0,
            3, 2, 1
        ];

        this.normals = [];
        for(var i = 0; i < 4 ; i++){
          this.normals.push(0,0,-1);
        }
        for(var i = 0; i < 4 ; i++){
          this.normals.push(0,0,1);
        }

        var tmp = this.indices.slice(0);
        tmp.reverse();
        this.indices = this.indices.concat(tmp);

        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
    updateTexCoords(coords) {
      this.texCoords = [...coords];
      this.updateTexCoordsGLBuffers();
    }
}
