// 모듈 탐색
// - 앱의 주요 모듈 및 로드된 라이브러리를 먼저 식별함
// - 대상이 앱 자체인지, 특정 라이브러리인 지 확인

Process.enumerateModules().forEach(function(module) {
    console.log("Module: " + module.name);
});
