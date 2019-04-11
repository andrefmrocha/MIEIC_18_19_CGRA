attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform sampler2D waterMap;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

varying vec2 vTextureCoord;


void main() {

  vec4 color = texture2D(waterMap, aTextureCoord);

  float v = (color.g + color.r + color.b)/3.0;

  float t = timeFactor;

  vec3 offset = vec3(0,0,0.07 * v + sin(t + aTextureCoord[1] + aTextureCoord[0] * t * 0.2 ));

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vTextureCoord = aTextureCoord;



}
