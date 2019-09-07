/**
 * @Name: style.css
 * @Description: Style sheet
 * @CreatedBy: Masato Shima
 * @CreatedOn: 2019/09/04
 **/

"use strict";

const city = "Tokyo";
const key = "86c3a77617eae9c0142bb8901d3ae839";
const url = `https:api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;

fetch(url)
    .then(
        response => {
            // Status Code
            console.log(`Response status => ${response.status}`);

            // Response Content
            response.json()
                .then(
                    response_content => {
                        console.log(
                            `Response content => ${JSON.stringify(response_content)}`
                        );

                        const view = `
                            <p>Today's weather in ${response_content.name} is ...</p>
                            <p>${response_content.weather[0].main}</p>
                            <p>${response_content.weather[0].description}</p>
                        `;

                        const result = document.getElementById("response_content_view");
                        result.innerHTML = view;
                    }
                )
        }
    ).catch(
        error => {
            console.log(`Failed... ${error}`)
        }
);

// End
