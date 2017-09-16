import babel from 'rollup-plugin-babel'
import jsx from 'rollup-plugin-jsx'

export default {
  entry: 'index.js',
  external: ['next/head'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    jsx({ factory: 'React.createElement' })
  ],
  targets: [
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.umd.js', format: 'umd' },
    { dest: 'dist/bundle.es.js', format: 'es' }
  ]
}
