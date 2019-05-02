class MyLeaf extends CGFobject{
  constructor(scene){
    super(scene);
    this.leaf = new MyParallelogram(scene);
  }
  display(){
    this.scene.pushMatrix();
    this.scene.scale(1,1,1);
    this.branch.display();
    this.scene.popMatrix()
  }
}
