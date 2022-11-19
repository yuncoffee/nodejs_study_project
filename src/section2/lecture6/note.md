# process

## node 내장 객체 - 3

`node` 실행 후 `process` 하면 실행된 노드 process의 정보 나옴

``` typescript
    node
    process
    process {
  version: 'v18.5.0',
  versions: {
    node: '18.5.0',
    v8: '10.2.154.4-node.8',
    uv: '1.43.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.18.1',
    modules: '108',
    nghttp2: '1.47.0',
    napi: '8',
    llhttp: '6.0.7',
    openssl: '3.0.5+quic',
    cldr: '41.0',
    icu: '71.1',
    tz: '2022a',
    unicode: '14.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  },
  arch: 'x64',
  platform: 'darwin',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v18.5.0/node-v18.5.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v18.5.0/node-v18.5.0-headers.tar.gz'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding native_module',
    'Internal Binding errors',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding timers',
    'Internal Binding async_wrap',
    'Internal Binding constants',
    'Internal Binding util',
    'Internal Binding types',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/validators',
    'NativeModule internal/promise_hooks',
    'Internal Binding task_queue',
    'Internal Binding symbols',
    'NativeModule internal/async_hooks',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'NativeModule internal/assert',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule internal/util/debuglog',
    'NativeModule internal/timers',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding string_decoder',
    'NativeModule internal/buffer',
    'Internal Binding blob',
    'NativeModule internal/encoding',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule internal/constants',
    'NativeModule internal/blob',
    'NativeModule buffer',
    'NativeModule internal/modules/esm/handle_process_exit',
    'Internal Binding process_methods',
    'NativeModule internal/process/per_thread',
    'Internal Binding credentials',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule async_hooks',
    'NativeModule internal/process/task_queues',
    'Internal Binding worker',
    'NativeModule internal/util/parse_args/utils',
    'NativeModule internal/util/parse_args/parse_args',
    'NativeModule util',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'NativeModule timers',
    'NativeModule internal/abort_controller',
    'NativeModule internal/streams/utils',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/operators',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/legacy',
    'NativeModule internal/streams/add-abort-signal',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/state',
    'NativeModule string_decoder',
    'NativeModule internal/streams/from',
    'NativeModule internal/streams/readable',
    'NativeModule internal/streams/writable',
    'NativeModule internal/streams/duplex',
    'NativeModule internal/streams/pipeline',
    'NativeModule internal/streams/compose',
    'NativeModule stream/promises',
    'NativeModule internal/streams/transform',
    'NativeModule internal/streams/passthrough',
    'NativeModule stream',
    'NativeModule internal/worker/io',
    'NativeModule internal/structured_clone',
    'Internal Binding trace_events',
    'NativeModule path',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'Internal Binding fs',
    'NativeModule internal/querystring',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'NativeModule internal/fs/utils',
    'Internal Binding fs_dir',
    'NativeModule internal/fs/dir',
    'Internal Binding fs_event_wrap',
    'Internal Binding uv',
    'NativeModule internal/fs/watchers',
    'NativeModule internal/fs/read_file_context',
    'NativeModule fs',
    'Internal Binding serdes',
    'Internal Binding profiler',
    'Internal Binding heap_utils',
    'Internal Binding stream_wrap',
    'NativeModule internal/stream_base_commons',
    'NativeModule internal/heap_utils',
    'Internal Binding v8',
    'NativeModule v8',
    'Internal Binding contextify',
    'NativeModule vm',
    'NativeModule internal/idna',
    ... 108 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [ [Function: startListeningIfSignal], [Function (anonymous)] ],
    removeListener: [ [Function: stopListeningIfSignal], [Function (anonymous)] ],
    warning: [Function: onWarning],
    SIGWINCH: [Function: refreshStdoutOnSigWinch]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: [Getter/Setter],
  _exiting: false,
  config: [Getter/Setter],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function (anonymous)],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  assert: [Function: deprecated],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: [Getter]
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function (anonymous)],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function (anonymous)],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: {
    USER: 'coffeegom',
    MallocNanoZone: '0',
    __CFBundleIdentifier: 'com.microsoft.VSCode',
    COMMAND_MODE: 'unix2003',
    LOGNAME: 'coffeegom',
    PATH: '/Users/coffeegom/istio-1.10.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin',
    SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.4ZjdYs5FYD/Listeners',
    SHELL: '/bin/zsh',
    HOME: '/Users/coffeegom',
    __CF_USER_TEXT_ENCODING: '0x1F5:0x3:0x33',
    TMPDIR: '/var/folders/5y/xxpgvglx3qd46wsmcwyr_vq40000gn/T/',
    XPC_SERVICE_NAME: '0',
    XPC_FLAGS: '0x0',
    ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.73.0',
    LANG: 'en_US.UTF-8',
    COLORTERM: 'truecolor',
    GIT_ASKPASS: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh',
    VSCODE_GIT_ASKPASS_NODE: '/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper',
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
    VSCODE_GIT_ASKPASS_MAIN: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js',
    VSCODE_GIT_IPC_HANDLE: '/var/folders/5y/xxpgvglx3qd46wsmcwyr_vq40000gn/T/vscode-git-41aa325314.sock',
    VSCODE_INJECTION: '1',
    ZDOTDIR: '/Users/coffeegom',
    USER_ZDOTDIR: '/Users/coffeegom',
    PWD: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture6',
    TERM: 'xterm-256color',
    SHLVL: '1',
    OLDPWD: '/Users/coffeegom/Desktop/project/nodejs_study_project',
    ZSH: '/Users/coffeegom/.oh-my-zsh',
    PAGER: 'less',
    LESS: '-R',
    LSCOLORS: 'Gxfxcxdxbxegedabagacad',
    _: '/usr/local/bin/node'
  },
  title: 'node',
  argv: [ '/usr/local/bin/node' ],
  execArgv: [],
  pid: 12790,
  ppid: 11743,
  execPath: '/usr/local/bin/node',
  debugPort: 9229,
  argv0: 'node',
  exitCode: undefined,
  _preload_modules: [],
  report: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  [Symbol(kCapture)]: false
}

```

### process객체의 주요 정보들

``` typescript

process.version // 설치된 노드의 버전

process.arch // 프로세스 아키텍처 정보

process.platform // 운영체제 플랫폼

process.pid // 현재 프로세스의 id

process.uptime() // 프로세스가 시작된 후 흐른 시간 (단위 : 초)

process.execPath // 노드의 경로

process.cwd() // 현재 프로세스가 실행되는 위치

process.cpuUsage() // 현재 cpu 사용량

```

### process.env

시스템 환경변수

비밀번호 등 비밀키(DB pw, APP_KEY, ...)를 숨기기 위해 자주 사용

일부 환경 변수는 노드 실행 시 영향을 미침

``` typescript

// 비밀키 샘플
const secretId = process.env.SECRET_ID

// 노드에 직접 영향을 미치는 환경 변수
NODE_OPIONTS=--max-old-space-size=8192 // 노드의 메모리를 8GB까지 사용
UV_THREADPOOL_SIZE=8 // 노드에서 기본적으로 사용하는 스레드풀의 스레드 개수 8개 사용

```

### process.nextTick

이벤트 루프가 다른 콜백 함수들보다 `nexTick`의 콜백 함수를 우선으로 처리하도록 만듬.

- 남용시 다른 콜백 함수 실행 늦어짐
- 비슷한 예로 `promise`가 있음

``` typescript

setImmediate(() => {
    console.log("immediate") //4 timeout과 실행순서 달라질 수 있음
})

process.nextTick(() => {
    console.log("nextTick") // 1 (mircotask)
})

setTimeout(() => {
    console.log("timeout") //3 immediate와 실행순서 달라질 수 있음
}, 0)

Promise.resolve().then(() => {
    console.log("promise") //2 (mircotask)
})

```

### process.exit

실행 중인 porcess 종료

``` typescript

let i = 0

setInterval(() => {
    if (i === 5) {
        console.log("종료")
        process.exit()
    }
    console.log(i)
    i += 1
}, 1000)

process.exit() | process.exit(1) // 정상 종료

process.exit(1) // 비정상종료 시 사용 예 ) 서버 에러 

```
