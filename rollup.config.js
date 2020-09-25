import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/index.js',
  output: [
    {
      format: 'umd',
      file: 'build/build.js',
      indent: '\t',
      name: 'ArcCore',
    },
    {
      format: 'umd',
      file: 'build/build.min.js',
      name: 'ArcCore',
      plugins: [
        terser(),
      ],
      sourcemap: true,
    },
  ],
  watch: {
    include: './dist/**/*.js',
  },
};
