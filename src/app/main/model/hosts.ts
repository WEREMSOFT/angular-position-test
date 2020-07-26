export class Host {
    public static fromObject(object: { grid: string, host: string }): Host {
        return new Host(object.grid, object.host);
    }
    private constructor(public grid: string, public host: string) { }
};

export const HOSTS: Host[] = [
    Host.fromObject({
        grid: 'gs-tst-test202-dev-dir-1',
        host: 'host5'
    }),
    Host.fromObject({
        grid: 'gs-tst-test202-dev-dir-1',
        host: 'host4'
    }),
    Host.fromObject({
        grid: 'gs-tst-test202-dev-dir-2',
        host: 'host3'
    }),
    Host.fromObject({
        grid: 'gs-tst-test202-dev-dir-2',
        host: 'host2'
    }),
    Host.fromObject({
        grid: 'gs-tst-test202-dev-dir-3',
        host: 'host1'
    }),
];
