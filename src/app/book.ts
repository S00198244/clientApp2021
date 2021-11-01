import { Variable } from "@angular/compiler/src/render3/r3_ast";

export interface Book {
    _id: Variable,
    title: string,
    year_written: number,
    edition: string,
    price: number,
    author : { name : string, nationality : string},
    tags: string[];
}
