// html dosyasında script tag ile bu dosyayı import ederken, kaynak dosyayı type='module' olarak belirtmeliyiz

import { greet } from './exported.js'

// default olanı istediğimiz isim ile çağırabiliriz
// her .js dosyası bir tane default nitelikte export yapabilir
import defaultDeger from './exported.js'

greet();

console.log(defaultDeger)