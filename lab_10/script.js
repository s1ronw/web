const tankDescriptions = {
    tank1: {
        name: "2С38 'Деривация'",
        description: "Детальніше про 2С38 на <a href='https://wiki.warthunder.com/2%D0%A138' target='_blank'>War Thunder Wiki</a>."
    },
    tank2: {
        name: "M1 Abrams",
        description: "Детальніше про M1 Abrams на <a href='https://wiki.warthunder.com/M1_Abrams' target='_blank'>War Thunder Wiki</a>."
    },
    tank3: {
        name: "Т-72АВ (TURMS-T)",
        description: "Детальніше про Т-72АВ (TURMS-T) на <a href='https://wiki.warthunder.com/%D0%A2-72%D0%90%D0%92_(TURMS-T)' target='_blank'>War Thunder Wiki</a>."
    },
    tank4: {
        name: "T-34-85",
        description: "Детальніше про T-34-85 на <a href='https://wiki.warthunder.com/T-34-85' target='_blank'>War Thunder Wiki</a>."
    },
    tank5: {
        name: "M4 Sherman",
        description: "Детальніше про M4 Sherman на <a href='https://wiki.warthunder.com/M4' target='_blank'>War Thunder Wiki</a>."
    },
    tank6: {
        name: "Flakpanzer Gepard",
        description: "Детальніше про Flakpanzer Gepard на <a href='https://wiki.warthunder.com/Gepard' target='_blank'>War Thunder Wiki</a>."
    },
    tank7: {
        name: "Tiger II (H)",
        description: "Детальніше про Tiger II (H) на <a href='https://wiki.warthunder.com/Tiger_II_(H)' target='_blank'>War Thunder Wiki</a>."
    },
    tank8: {
        name: "Challenger 2",
        description: "Детальніше про Challenger 2 на <a href='https://wiki.warthunder.com/Challenger_2' target='_blank'>War Thunder Wiki</a>."
    },
    tank9: {
        name: "A-10 Thunderbolt II",
        description: "Детальніше про A-10 Thunderbolt II на <a href='https://wiki.warthunder.com/A-10A' target='_blank'>War Thunder Wiki</a>."
    },
    tank10: {
        name: "SU-25K",
        description: "Детальніше про SU-25K на <a href='https://wiki.warthunder.com/%D0%A1%D1%83-25%D0%9A' target='_blank'>War Thunder Wiki</a>."
    },
    tank11: {
        name: "MIG-21 'Lazur-M'",
        description: "Детальніше про MIG-21 'Lazur-M' на <a href='https://wiki.warthunder.com/MiG-21_%22Lazur-M%22_(%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F)' target='_blank'>War Thunder Wiki</a>."
    },
    tank12: {
        name: "F-4J Phantom II",
        description: "Детальніше про F-4J Phantom II на <a href='https://wiki.warthunder.com/F-4J_Phantom_II' target='_blank'>War Thunder Wiki</a>."
    }
};

function showTankInfo(tankId) {
    const tankInfo = document.getElementById("tank-info");
    const tankContent = document.getElementById("tank-content");
    const tank = tankDescriptions[tankId];
    tankContent.innerHTML = `<h2>${tank.name}</h2><p>${tank.description}</p>`;
    tankInfo.style.display = "flex";
    document.querySelectorAll('.tank').forEach(tankElement => {
        if (!tankElement.classList.contains(tankId)) {
            tankElement.classList.add('hidden');
        }
    });
}

function closeTankInfo() {
    const tankInfo = document.getElementById("tank-info");
    tankInfo.style.display = "none";
    document.querySelectorAll('.tank').forEach(tankElement => {
        tankElement.classList.remove('hidden');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const tankInfo = document.getElementById("tank-info");
    tankInfo.addEventListener("click", (event) => {
        if (event.target === tankInfo) closeTankInfo();
    });
});