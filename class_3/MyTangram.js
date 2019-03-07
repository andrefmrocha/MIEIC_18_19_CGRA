class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        //square
        this.diamondGreen = new MyDiamond(scene);
        //medium triangle
        this.trianglePink = new MyTriangle(scene);
        //small triangle
        this.triangleRed = new MyTriangleSmall(scene);
        this.trianglePurple = new MyTriangleSmall(scene);
        //big triangle
        this.triangleBlue = new MyTriangleBig(scene);
        this.triangleOrange = new MyTriangleBig(scene);
        //parallelogram
        this.parallelogramYellow = new MyParallelogram(scene);

    }

    display(){
        // ---- BEGIN Primitive drawing section

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([2, 1.75, 0]));
        this.scene.multMatrix(rotate_Z(45 - 17));
        this.diamondGreen.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(rotate_Z(270));
        this.trianglePink.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([-3.83, -0.2, 0]));
        this.triangleRed.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([-2.5, 1.5, 0]));
        this.scene.multMatrix(rotate_Z(-45));
        this.scene.multMatrix(translation([-0.5, 0, 0]));
        this.trianglePurple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([2, -1, 0]));
        this.triangleBlue.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([-1.5, 0.5, 0]));
        this.scene.multMatrix(rotate_Z(135));
        this.scene.multMatrix(translation([-0.13, 0, 0]));
        this.triangleOrange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(rotate_X(180));
        this.scene.multMatrix(translation([2, -1, 0]));
        this.scene.multMatrix(translation([Math.sqrt(2) * 0.3, Math.sqrt(2) * 0.3, 0]));
        this.parallelogramYellow.display();
        this.scene.popMatrix();

    }
    updateBuffers (){
      
    }

    enableNormalViz(){
        this.diamondGreen.enableNormalViz();
        this.trianglePink.enableNormalViz();
        this.triangleRed.enableNormalViz();
        this.trianglePurple.enableNormalViz();
        this.triangleBlue.enableNormalViz();
        this.triangleOrange.enableNormalViz();
        this.parallelogramYellow.enableNormalViz();
    }
    disableNormalViz(){
        this.diamondGreen.disableNormalViz();
        this.trianglePink.disableNormalViz();
        this.triangleRed.disableNormalViz();
        this.trianglePurple.disableNormalViz();
        this.triangleBlue.disableNormalViz();
        this.triangleOrange.disableNormalViz();
        this.parallelogramYellow.disableNormalViz();
    }
}
