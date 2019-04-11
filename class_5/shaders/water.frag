#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform float timeFactor;


uniform sampler2D waterTex;
void main() {
	
	vec4 color = texture2D(waterTex, vTextureCoord);

	gl_FragColor = color;
}
