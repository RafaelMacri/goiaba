class launcher{

constructor(bodyA,pointB){
var op={
    bodyA:bodyA,
    pointB:pointB,
    stiffiness:0.007,
    length:10
}
this.bodyA=bodyA
this.pointB=pointB
this.launcher=Constraint.create(op)
World.add(world,this.launcher)
}
fly(){
this.launcher.bodyA=null

}


}