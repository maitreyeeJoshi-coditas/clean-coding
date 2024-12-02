export class Category {
    private id: string;
    private name: string;
    static categories: Category[];

    constructor(
        id: string,
        name: string
    ) {
        this.id = id,
        this.name = name
        Category.categories.push(this);
    }

    static findOne = (name: string) => {
        return Category.categories.find(category => name === category.name);
    }

    static findAll = (name: string) => {
        return [...Category.categories];
    }
}

const category1 = new Category('1', 'politics');
const category2 = new Category('1', 'politics');
