import 'egg';

declare module 'egg' {
    interface Application {
        io: any;
    }
}