# 모듈 심화, 순환 참조

### require

``` typescript
    // 실행만 해도 됨. 변수, 함수 등 사용 안할 때 
    // require는 최상위가 아니여도 된다 (import는 최상위로 와야됨)
    require("./var")

    // require 사용 시 처음에는 실제 파일에서 불러오고 cache에 저장해서 불러온다.
    // 캐시를 삭제할 수도 있긴하다.(잘 쓰지는 않지만, 고수용임)
    console.log(require)
    // [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: Module {
//       id: '.',
//       path: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5',
//       exports: {},
//       filename: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/index.ts',
//       loaded: false,
//       children: [ [Module] ],
//       paths: [
//         '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/node_modules',
//         '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/node_modules',
//         '/Users/coffeegom/Desktop/project/nodejs_study_project/src/node_modules',
//         '/Users/coffeegom/Desktop/project/nodejs_study_project/node_modules',
//         '/Users/coffeegom/Desktop/project/node_modules',
//         '/Users/coffeegom/Desktop/node_modules',
//         '/Users/coffeegom/node_modules',
//         '/Users/node_modules',
//         '/node_modules'
//       ],
//       _compile: [Function (anonymous)]
//     },
//     extensions: [Object: null prototype] {
//       '.js': [Function (anonymous)],
//       '.json': [Function (anonymous)],
//       '.node': [Function (anonymous)],
//       '.ts': [Function (anonymous)]
//     },
//     cache: [Object: null prototype] {
//       '/usr/local/lib/node_modules/ts-node/dist/bin.js': Module {
//         id: '.',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/bin.js',
//         loaded: false,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/util.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/util.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/util.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/yn/index.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/yn/index.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/yn',
//         exports: [Function],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/yn/index.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/yn/lenient.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/yn/lenient.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/yn',
//         exports: [Function (anonymous)],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/yn/lenient.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/repl.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/repl.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/repl.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/index.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/index.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/index.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/make-error/index.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/make-error/index.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/make-error',
//         exports: [Function],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/make-error/index.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/configuration.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/configuration.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/configuration.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/ts-internals.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/ts-internals.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/ts-internals.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/tsconfigs.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/tsconfigs.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/tsconfigs.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/module-type-classifier.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/module-type-classifier.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/module-type-classifier.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/resolver-functions.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/resolver-functions.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/resolver-functions.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/cjs-resolve-hooks.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/cjs-resolve-hooks.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/cjs-resolve-hooks.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/node-module-type-classifier.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/node-module-type-classifier.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/node-module-type-classifier.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-cjs-loader.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-cjs-loader.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-cjs-loader.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-primordials.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-primordials.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-primordials.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-nativemodule.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-nativemodule.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-nativemodule.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-internalBinding-fs.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internalBinding-fs.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internalBinding-fs.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-package_json_reader.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-package_json_reader.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-package_json_reader.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-cjs-helpers.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-cjs-helpers.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-modules-cjs-helpers.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-options.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-options.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-options.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/arg/index.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/arg/index.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/arg',
//         exports: [Function],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/arg/index.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-errors.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-errors.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-errors.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-constants.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-constants.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist-raw',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist-raw/node-internal-constants.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/file-extensions.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/file-extensions.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/file-extensions.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/ts-transpile-module.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/ts-transpile-module.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/ts-transpile-module.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/package.json': Module {
//         id: '/usr/local/lib/node_modules/ts-node/package.json',
//         path: '/usr/local/lib/node_modules/ts-node',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/package.json',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/child/spawn-child.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/child/spawn-child.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist/child',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/child/spawn-child.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/dist/child/argv-payload.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/dist/child/argv-payload.js',
//         path: '/usr/local/lib/node_modules/ts-node/dist/child',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/dist/child/argv-payload.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/v8-compile-cache-lib/v8-compile-cache.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/v8-compile-cache-lib/v8-compile-cache.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/v8-compile-cache-lib',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/v8-compile-cache-lib/v8-compile-cache.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/Users/coffeegom/Desktop/project/nodejs_study_project/node_modules/typescript/lib/typescript.js': Module {
//         id: '/Users/coffeegom/Desktop/project/nodejs_study_project/node_modules/typescript/lib/typescript.js',
//         path: '/Users/coffeegom/Desktop/project/nodejs_study_project/node_modules/typescript/lib',
//         exports: [Object],
//         filename: '/Users/coffeegom/Desktop/project/nodejs_study_project/node_modules/typescript/lib/typescript.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/@cspotcode/source-map-support/source-map-support.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/@cspotcode/source-map-support/source-map-support.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/@cspotcode/source-map-support',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/@cspotcode/source-map-support/source-map-support.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/trace-mapping/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/sourcemap-codec/dist',
//         exports: [Object],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js': Module {
//         id: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js',
//         path: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/resolve-uri/dist',
//         exports: [Function: resolve],
//         filename: '/usr/local/lib/node_modules/ts-node/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/index.ts': Module {
//         id: '.',
//         path: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5',
//         exports: {},
//         filename: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/index.ts',
//         loaded: false,
//         children: [Array],
//         paths: [Array],
//         _compile: [Function (anonymous)]
//       },
//       '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/var.ts': Module {
//         id: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/var.ts',
//         path: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5',
//         exports: [Object],
//         filename: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture5/var.ts',
//         loaded: true,
//         children: [],
//         paths: [Array],
//         _compile: [Function (anonymous)]
//       }
//     }
//   }

```

### 순환참조

- 서로가 서로를 참조할 경우. 무한 루프에 빠져서 뻗어버리기 떄문에 빈 객체로 바꾼다.
- 안 생기게 피하자.

``` typescript
// dep1.ts
import dep2 = require("./dep2")
console.log("dep2", dep2)
```

``` typescript
// dep2.ts
import dep1 = require("./dep1")
console.log("dep1", dep1)
```

``` typescript
// index.ts
import dep2 = require("./dep2")
import dep1 = require("./dep1")

console.log(dep2)
// dep1 {}
// dep2 {}
// {} // 순환참조로 인해 빈 객체로 변경됨
```
