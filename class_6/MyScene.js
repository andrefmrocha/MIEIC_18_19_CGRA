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
        this.gl.clearColor(1.0, 1.0, 1.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Objects connected to MyInterface
        this.axiom = "X"; // "X"; //
        this.ruleF = "FF"; // "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5
        this.plant = new MyLSPlant(this);

        this.rulesX = [];
        this.rulesX.push("F[-X][X]F[-X]+X");
        this.rulesX.push("F[-X][x]+X");
        this.rulesX.push("F[+X]-X");


        this.materialLeaf = new CGFappearance(this);
        this.materialLeaf.setAmbient(
            0.1,
            0.1,
            0.1,
            1
        );
        this.materialLeaf.setDiffuse(
            0.9,
            0.9,
            0.9,
            1
        );
        this.materialLeaf.setSpecular(
            0.1,
            0.1,
            0.1,
            1
        );
        this.materialLeaf.setShininess(10.0);
        this.materialLeaf.loadTexture(
            "images/treetop.jpg"
        );

        this.doGenerate = function () {
            this.plant.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X":  this.rulesX
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();

        //Initialize scene objects
        this.axis = new CGFaxis(this);


        this.materialWood = new CGFappearance(this);
        this.materialWood.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialWood.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWood.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialWood.setShininess(10.0);
        this.materialWood.loadTexture('images/wood.jpg');

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
        this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.plant.display();

        // ---- END Primitive drawing section
    }
}
