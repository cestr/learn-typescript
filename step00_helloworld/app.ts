class Startup{
    public static PI: number = 3.14;
    public static main(): number {
        console.log("Hello World");
        return 0;
    }
    public R: number = 2;
    private _d: number = 4;
    public getUserInfo(): void {
        console.log("getUserInfo");
    }
}

Startup.main();
console.log(new Startup().R);
// console.log(new Startup()._d);