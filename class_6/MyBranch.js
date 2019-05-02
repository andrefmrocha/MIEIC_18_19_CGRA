class MyBranch extends CGFobject{
  constructor(scene){
    super(scene);
    this.branch = new MyCylinder(scene,3,0.5,1);
  }
  display(){
    this.branch.display();
  }
}
