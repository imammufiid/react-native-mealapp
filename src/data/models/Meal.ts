export class Meal {
    id: string = ''
    categoryIds: string[] = []
    title: string = ''
    affordability: string = ''
    complexity: string = ''
    imageUrl: string = ''
    duration: number = 0
    ingredients: string[] = []
    steps: string[] = []
    isGlutenFree: boolean = false
    isVegan: boolean = false
    isVegetarian: boolean = false
    isLactoseFree: boolean = false

    constructor(
        id: string,
        categoryIds: string[],
        title: string,
        affordability: string,
        complexity: string,
        imageUrl: string,
        duration: number,
        ingredients: string[],
        steps: string[],
        isGlutenFree: boolean,
        isVegan: boolean,
        isVegetarian: boolean,
        isLactoseFree: boolean
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}