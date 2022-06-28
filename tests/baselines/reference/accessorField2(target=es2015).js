//// [accessorField2.ts]
class C1 {
    accessor #a: any;
    accessor #b = 1;
    static accessor #c: any;
    static accessor #d = 2;
}


//// [accessorField2.js]
var _a, _C1_a, _C1_b, _C1_c, _C1_d, _C1_a_accessor_storage, _C1_b_accessor_storage, _C1_c_accessor_storage, _C1_d_accessor_storage;
class C1 {
    constructor() {
        _C1_a_accessor_storage.set(this, void 0);
        _C1_b_accessor_storage.set(this, 1);
    }
}
_a = C1, _C1_a = new WeakMap(), _C1_b = new WeakMap(), _C1_a_accessor_storage = new WeakMap(), _C1_b_accessor_storage = new WeakMap();
_C1_c_accessor_storage = { value: void 0 };
_C1_d_accessor_storage = { value: 2 };
