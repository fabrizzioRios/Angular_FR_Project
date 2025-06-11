import {Person} from "./08-classes.ts";

export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: "Luis",
}


const passenger2: Passenger = {
    name: "Fab",
    children: ['Lui', 'Fabs']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1)
printChildren(passenger2)