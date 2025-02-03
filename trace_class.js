// 클래스 출력하는 스크립트 => app026.AdminViewController --> app026 : 특정 앱 이름 , Admin~: 클래스명
var search_class = ['app026'];

if (ObjC.available)
{
    console.log('[*] 1. Tracing classes : 선택한 모듈과 관련된 메서드 탐색')

    for (var className in ObjC.classes) {
        if (Array.isArray(search_class) && search_class.length) {
            for (var i = 0; i < search_class.length; i++) {
                if (className.toLowerCase().includes(search_class[i].toLowerCase())) {
                    console.log(className)
                }
            }
        }
        else {
            console.log(className);
        }
    }
}
else {
    console.log('Objective-C Runtime is not available!');
}


console.log("[*****************************************]");
console.log("[*****************************************]");
console.log("[*****************************************]");

console.log("[*] 2. Listing all loaded modules... >> 특정 모듈의 기본 메모리 주소(앱의 시작 주소) 출력 ");

var modules = Process.enumerateModulesSync();
modules.forEach(function (module) {
    if(module.name.includes("app026")){
    console.log("[+] Module: " + module.name);
    console.log("    Base Address: " + module.base);
    //console.log("    Size: " + module.size);
    }
});



console.log("[*****************************************]");
console.log("[*****************************************]");
console.log("[*****************************************]");
console.log("[*] 3. 해당 모듈과 관련된 함수 목록 출력 >> 앱 이름과 함수명에서 필터링 할 문자열 입력");
var moduleName = 'app026';
var symbols = Module.enumerateSymbolsSync(moduleName);
symbols.forEach(function (symbol) {
    if(symbol.name.includes('app026') & symbol.name.includes('Admin')){
    console.log('Symbol Name: ' + symbol.name);
    //console.log('Address: ' + symbol.address);
    }
});
