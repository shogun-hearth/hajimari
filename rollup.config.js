import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import babel from "@rollup/plugin-babel";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

const globals = [
  // ...Object.keys(packageJson.devDependencies || {}),
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

export default [
  {
    input: 'src/index.ts',
    external: globals,
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
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: 'namespace',
      }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'src/theme/index.ts',
    output: [
      {
        file: 'dist/cjs/theme.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/theme.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: globals,
    plugins: [
      babel({
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: 'namespace',
      }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'src/mui/index.ts',
    output: [
      {
        file: 'dist/cjs/mui.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/mui.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: globals,
    plugins: [
      babel({
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: 'namespace',
      }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/cjs/components.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/components.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: globals,
    plugins: [
      babel({
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: 'namespace',
      }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: globals,
  },
  {
    input: 'dist/esm/types/theme/index.d.ts',
    output: [{ file: 'theme/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: globals,
  },
  {
    input: 'dist/esm/types/mui/index.d.ts',
    output: [{ file: 'mui/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: globals,
  },
  {
    input: 'dist/esm/types/components/index.d.ts',
    output: [{ file: 'components/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: globals,
  },
];