"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var aSlot=null;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(path) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(path,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');bytes = new Promise( (resolve, reject) => {fs.readFile(path, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(path).then(response => response.arrayBuffer());}return bytes;}function o(){var f=null;f=l();console.log(f);return;}function l(){var f=null,i=null;f=String();i=String.fromCharCode(72);f=f.concat(i);i=String.fromCharCode(101);f=f.concat(i);i=String.fromCharCode(108);f=f.concat(i);i=String.fromCharCode(108);f=f.concat(i);i=String.fromCharCode(111);f=f.concat(i);i=String.fromCharCode(32);f=f.concat(i);i=String.fromCharCode(87);f=f.concat(i);i=String.fromCharCode(111);f=f.concat(i);i=String.fromCharCode(114);f=f.concat(i);i=String.fromCharCode(108);f=f.concat(i);i=String.fromCharCode(100);f=f.concat(i);return String(f);}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;function _asm_o(){o();}function __dummy() { throw new Error('this should be unreachable'); };var importObject={imports:{__Z9domOutputPKc:_asm_o,}};fetchBuffer('hello_cheerp.wasm').then(r=>WebAssembly.instantiate(r,importObject),console.log).then(r=>{var instance=r.instance;a=new Uint8Array(instance.exports.memory.buffer);b=new Uint16Array(instance.exports.memory.buffer);c=new Int32Array(instance.exports.memory.buffer);d=new Float32Array(instance.exports.memory.buffer);e=new Float64Array(instance.exports.memory.buffer);__asm=instance.exports;instance.exports.m();},console.log).catch(console.log);