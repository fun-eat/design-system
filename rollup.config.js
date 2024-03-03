import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const inputSrc = [
  ['./src/index.ts', 'cjs'],
  ['./src/index.ts', 'esm'],
];

export default inputSrc.map(([input, format]) => ({
  input,
  output: {
    dir: `dist/${format}`,
    format,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    postcss({
      minimize: true,
      modules: true,
      plugins: [postcssImport()],
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime', 'babel-plugin-styled-components'],
    }),
    terser(),
  ],
}));
