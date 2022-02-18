import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
// import jsx from 'acorn-jsx';
import babel from "@rollup/plugin-babel";
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');
// import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: [
      // ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
    // external: ['react', 'react-dom', 'styled-components'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    // acornInjectPlugins: [jsx()],
    plugins: [
      peerDepsExternal(),
      babel({
        // babelHelpers: "runtime",
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      resolve(),
      commonjs({
        exclude: "node_modules",
        ignoreGlobal: true,
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      // terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];