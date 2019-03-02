/**
* MyScene
* @constructor
*/



class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        //square
        this.diamondGreen = new MyDiamond(this);
        //medium triangle
        this.trianglePink = new MyTriangle(this);
        //small triangle
        this.triangleRed = new MyTriangleSmall(this);
        this.trianglePurple = new MyTriangleSmall(this);
        //big triangle
        this.triangleBlue = new MyTriangleBig(this);
        this.triangleOrange = new MyTriangleBig(this);
        //parallelogram
        this.parallelogramYellow = new MyParallelogram(this);


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayPara = false;
        this.displayDiamond = false;
        this.displayTriangle = false;
        this.scaleFactor = 1;
        this.displaySmall = false;
        this.displayBig = false;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);




        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.multMatrix(translation([2,1.75,0]));
        this.multMatrix(rotate_Z(45-17));
        this.diamondGreen.display();
        this.popMatrix();

        this.pushMatrix();
        this.multMatrix(rotate_Z(270));
        this.trianglePink.display();
        this.popMatrix();

        this.pushMatrix();
        this.multMatrix(translation([-3.83,-0.2,0]));
        this.triangleRed.display();
        this.popMatrix();

        this.pushMatrix();
        this.multMatrix(translation([-2.5,1.5,0]));
        this.multMatrix(rotate_Z(-45));
        this.multMatrix(translation([-0.5,0,0]));
        this.trianglePurple.display();
        this.popMatrix();

        this.pushMatrix();
        this.multMatrix(translation([2,-1,0]));
        this.triangleBlue.display();
        this.popMatrix();

        this.pushMatrix();
        this.multMatrix(translation([-1.5,0.5,0]));
        this.multMatrix(rotate_Z(135));
        this.multMatrix(translation([-0.13,0,0]));
        this.triangleOrange.display();
        this.popMatrix();

        this.pushMatrix();
        this.multMatrix(rotate_X(180));
        this.multMatrix(translation([0, -1, 0]));
        this.multMatrix(translation([2, 0, 0]));
        this.parallelogramYellow.display();
        this.popMatrix();
        // this.popMatrix();

        // ---- END Primitive drawing section
    }
}
