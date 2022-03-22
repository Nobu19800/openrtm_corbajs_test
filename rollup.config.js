import typescript from 'rollup-plugin-typescript2'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from "rollup-plugin-terser"


export default {
    input: 'src/openrtmTest.ts',
    external: ['websocket'],
    output: {
      file: 'js/openrtmTest.js',
      name: 'openrtmTest',
      format: 'iife', // umd, es, 
      sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: "esnext"
                },
            },
            include: [
                "src/*.ts",
            ],
            exclude: [
                "node_modules"
            ],
        }),
        nodeResolve(),
        terser()
    ]
}