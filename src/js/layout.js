export function printHeader(array, elementHTML) {
    let html = "";

    array.forEach(({ icon, number, state, title, today, user }) => {
        const iconState = state
            ? '<img src="./src/images/icon-up.svg" alt="icon up">'
            : '<img src="./src/images/icon-down.svg" alt="icon down"></img>';

        html += `
        <div class="body__header">
            <div class="body__header-user">
                <img src="${icon}" alt="icon facebook">
                <span>${user}</span>
            </div>

            <div class="body__header-followers">
                <p>${number}</p>
                <p>${title}</p>
            </div>

            <div class="body__header-day">
                ${iconState}
                <span class="${
                    state ? "color__green" : "color__red"
                }">${today} today</span>
            </div>
        </div>
        `;
    });

    elementHTML.innerHTML = html;
}

export function printInfo(array, elementHTML) {
    let html = "";

    array.forEach(({ icon, number, percent, state, title }) => {
        const iconState = state
            ? '<img src="./src/images/icon-up.svg" alt="icon up">'
            : '<img src="./src/images/icon-down.svg" alt="icon down"></img>';

        html += `
            <div class="body__info-item">
                <div class="body__info-item-top">
                    <span>${title}</span>
                    <img src="${icon}" alt="iconFacebook">
                </div>
                <div class="body__info-item-bottom">
                    <span>
                        ${number}
                    </span>

                    <div>
                        ${iconState}
                        <span class="${
                            state ? "color__green" : "color__red"
                        }">${percent} %</span>
                    </div>
                </div>
            </div>
        `;
    });

    elementHTML.innerHTML = html;
}
