import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/js/index.js',
  output: [
    {
      file: 'dist/zephcode.bundle.js',
      format: 'umd',
      name: 'ZephCode',
      sourcemap: true
    },
    {
      file: 'dist/zephcode.esm.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};
