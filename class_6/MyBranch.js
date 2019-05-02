class MyBranch extends CGFobject{
  constructor(scene){
    super(scene);
    this.branch = new MyCylinder(scene,3,0.4,1);
  }
  display(){
    this.scene.materialWood.apply();
    this.branch.display();
  }
}
