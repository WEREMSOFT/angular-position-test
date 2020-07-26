    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 5
    };

    constructor(private service: CategoriesService) {
        this.view = service;
        this.service.query(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }