//// [accessorField2.ts]
class C1 {
    accessor #a: any;
    accessor #b = 1;
    static accessor #c: any;
    static accessor #d = 2;
}


//// [accessorField2.js]
class C1 {
    accessor #a;
    accessor #b = 1;
    static accessor #c;
    static accessor #d = 2;
}
