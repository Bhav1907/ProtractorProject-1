import { HomePage } from "../pages/homePage.po";
import { browser } from "protractor";
import { DataProvider } from "../data/dataProvider";

let homePage = new HomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Common, async function (data) {
    describe("Convert Celsius to fahrenheit", () => {

        it("Navigate to application url", async () => {
            await homePage.openUrl(homePage.applicationUrl);
            expect(await homePage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Check the temparature of default city", async () => {
          //h3[@class='weather-widget__temperature']
        });

        it("Click on fahrenheit icon in header", async () => {
          
        });

        it("Verify celsius to fahrenheit conversion", async () => {
            await homePage.clickOnSearchResults('Mumbai');
            expect(await homePage.verifyCityDetails('Mumbai')).toBe(true);
        });

    });
});