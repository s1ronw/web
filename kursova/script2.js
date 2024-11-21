const carSeries = [
    {
        title: "1",
        cars: [
            { name: "BMW 1 серії", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M135i xDrive", gas: "Бензин" },
        ],
    },
    {
        title: "2",
        cars: [
            { name: "BMW 2 серії Coupe", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M2 Coupe", gas: "Бензин" },
            { name: "BMW 2 серії Active Tourer", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
        ],
    },
    {
        title: "3",
        cars: [
            { name: "BMW 3 серії Седан", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW 3 серії Touring", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW M3 Седан", gas: "Бензин" },
            { name: "BMW M3 Competition Touring", gas: "Бензин", diesel: "Дизель" },
        ],
    },
    {
        title: "4",
        cars: [
            { name: "BMW 4 серії Coupe", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M4 серії Купе", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M440i xDrive Гран Купе", gas: "Бензин" },
            { name: "BMW 4 серії Гран Купе", gas: "Бензин", diesel: "Дизель", electric: "Електро" },
            { name: "BMW 4 серії Convertible", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M4 серії Кабріолет", gas: "Бензин", diesel: "Дизель" },
        ],
    },
    {
        title: "5",
        cars: [
            { name: "BMW 5 серії Седан", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW 5 серії Cедан плагін-гібрид", plugin: "Плагін-гібрид" },
            { name: "BMW i5", electric: "Електро" },
            { name: "BMW i5 M60 xDrive", electric: "Електро" },
        ],
    },
    {
        title: "7",
        cars: [
            { name: "BMW 7 серії Седан", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW i7", electric: "Електро" },
            { name: "BMW i7 M70 xDrive", electric: "Електро" },
            { name: "BMW M760e xDrive", plugin: "Плагін-гібрид" },
        ],
    },
    {
        title: "8",
        cars: [
            { name: "BMW 8 серії Купе", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Купе", gas: "Бензин" },
            { name: "BMW 8 серії Кабріолет", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Кабріолет", gas: "Бензин" },
            { name: "BMW 8 серії Gran Coupé", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Gran Coupé", gas: "Бензин" },
        ],
    },
    {
        title: "X",
        cars: [
            { name: "BMW X1", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW iX1", electric: "Електро" },
            { name: "BMW X2", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X2 M35i xDrive", gas: "Бензин" },
            { name: "BMW iX2", electric: "Електро" },
            { name: "BMW X3", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X3 30e xDrive", plugin: "Плагін-гібрид" },
            { name: "BMW X3 M50 xDrive", gas: "Бензин" },
            { name: "BMW iX3", electric: "Електро" },
            { name: "BMW iX", electric: "Електро" },
            { name: "BMW iX M60", electric: "Електро" },
            { name: "BMW X4", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X4 M", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X5 (2023)", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW X5 M (2023)", gas: "Бензин" },
            { name: "BMW X6 (2023)", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X6 M (2023)", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X7", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X7 M60i xDrive", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW XM", plugin: "Плагін-гібрид" },
        ],
    },
    {
        title: "Z4",
        cars: [
            { name: "BMW Z4 Roadster", gas: "Бензин" },
        ],
    },
    {
        title: "M",
        cars: [
            { name: "BMW M2 Купе", gas: "Бензин" },
            { name: "BMW M3 Седан", gas: "Бензин" },
            { name: "BMW M3 Competition Touring", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M4 серії Купе", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M440i xDrive Гран Купе", gas: "Бензин" },
            { name: "BMW M4 серії Кабріолет", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Купе", gas: "Бензин" },
            { name: "BMW M8 Кабріолет", gas: "Бензин" },
            { name: "BMW M8 Gran Coupé", gas: "Бензин" },
            { name: "BMW X2 M35i xDrive", gas: "Бензин" },
            { name: "BMW X3 M50 xDrive", gas: "Бензин" },
            { name: "BMW X4 M", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X5 M (2023)", gas: "Бензин" },
            { name: "BMW X6 M (2023)", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X7 M60i xDrive", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW iX M60", electric: "Електро" },
        ],
    },
    {
        title: "BMW i",
        cars: [
            { name: "BMW i4 Gran Coupé", electric: "Електро" },
            { name: "BMW i4", electric: "Електро" },
            { name: "BMW i7", electric: "Електро" },
            { name: "BMW i7 M70 xDrive", electric: "Електро" },
            { name: "BMW i5", electric: "Електро" },
            { name: "BMW i5 M60 xDrive", electric: "Електро" },
            { name: "BMW i5 M60 xDrive Touring", electric: "Електро" },
            { name: "BMW iX", electric: "Електро" },
            { name: "BMW iX M60", electric: "Електро" },
            { name: "BMW iX1", electric: "Електро" },
            { name: "BMW iX2", electric: "Електро" },
            { name: "BMW iX3", electric: "Електро" },
        ],
    },
];


function renderCatalog() {
    const catalog = document.querySelector(".catalog");
    carSeries.forEach((series) => {
        const seriesContainer = document.createElement("div");
        seriesContainer.className = "series";


        const title = document.createElement("h2");
        title.className = "titletext1";
        title.textContent = series.title;
        seriesContainer.appendChild(title);
        const row = document.createElement("div");
        row.className = "row";

        series.cars.forEach((car) => {
            const model = document.createElement("div");
            model.className = "model";

            model.innerHTML = `
                <img src="image/${car.name}.png" alt="${car.name}">
                <div class="nametext">${car.name}</div>
                <div class="desctext">
                    ${car.gas ? car.gas : ""}
                    ${car.diesel ? "• " + car.diesel : ""}
                    ${car.plugin ? "• " + car.plugin : ""}
                    ${car.electric ? "• " + car.electric : ""}
                </div>
            `;

            row.appendChild(model);
        });
        seriesContainer.appendChild(row);
        catalog.appendChild(seriesContainer);
    });
}

document.addEventListener("DOMContentLoaded", renderCatalog);
