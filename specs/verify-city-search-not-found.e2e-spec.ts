import { HomePage } from "../pages/homePage.po";
import { browser } from "protractor";
import { DataProvider } from "../data/dataProvider";

let homePage = new HomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Common, async function (data) {
    describe("Search wrong city name for weather search", () => {

        it("Navigate to application url", async () => {
            await homePage.openUrl(homePage.applicationUrl);
            expect(await homePage.getPageTitle()).toBe(data.pageTitle);
        });

        it("When entered wrong city to search", async () => {
            await homePage.enterCityName('abcd');
            await homePage.clickOnSearch();
        });

        it("Then verify city not found error mesage", async () => {
            expect(await homePage.verifyErrorMessage('Not found')).toBe(true);
        });

    });
});