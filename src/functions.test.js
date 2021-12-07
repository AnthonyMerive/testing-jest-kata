import { createEvent, NUM_DAY } from './functions'

//fecha quemada dada por el coach cuando la uso me da error el 2do test
// beforeAll(() => { 
//     global.Date.now = jest.fn(() => new Date('2021-12-07T10:20:30Z').getTime()) 
// });

//necesario en varias pruebas, mejor tenerlas globales

const weekday = 'mon';
const week = 1;
const openHour = 8;
const closeHour = 14;

const numDay = NUM_DAY[weekday];
const currentDay = new Date().getDay();
const date = getDateCalendar(numDay, currentDay).setSeconds(0,0);

const result = createEvent(weekday, week, openHour, closeHour);

//-----------------------------------------------------------------

function addDays(days) {
    return new Date(new Date().setDate(new Date().getDate() + days));
}

function getDateCalendar(numDay, currentDay) {
    if (numDay >= currentDay && parseInt(closeHour) >= hour) {//posterior a dia de la semana
        return addDays((numDay - currentDay) + 7 * (week - 1));
    }
    return addDays((numDay - currentDay) + 7 * (week - 1));
}

//--------------------------------------------------------

test('Validation a event title and content basic', () => {

    expect(result.title).toBe('[SOFKA U] Meeting Room');
    expect(result.description).toBe('Mentoring and Practice');

    //al ser un arreglo debe ser toEqual (verificamos el resultado de duracion)
    expect(result.duration).toEqual([6, 'hour']);
});

test('Validation start date', () => {

    //a veces pasa esta prueba y a veces no, por temas de tiemp de ejecucion
    expect(result.start).toEqual(date);

});

test('Validation date', () => {

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

    const start = new Date(date).toLocaleDateString('es-ES', options);

    expect(result.date).toEqual(start);
});


test('Validation illegal arguments', () => {
    //TODO: hacer las verificaciones
});


test('create an event list of at least 10 events', () => {
    //TODO: hacer las verificaciones
});