import { HomePage } from "../pages/homePage.po";
import { browser } from "protractor";
import { DataProvider } from "../data/dataProvider";

let homePage = new HomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Common, async function (data) {
    describe("Search city for proper weather details", () => {

        it("Navigate to application url", async () => {
            await homePage.openUrl(homePage.applicationUrl);
            expect(await homePage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Entered city name to search", async () => {
            await homePage.enterCityName('Mumbai');
            await homePage.clickOnSearch();
        });

        it("Verify city found and check the weather details", async () => {
            await homePage.clickOnSearchResults('Mumbai');
            expect(await homePage.verifyCityDetails('Mumbai')).toBe(true);
        });

    });
});